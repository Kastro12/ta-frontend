import React, { useMemo, useState } from 'react';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSelector, useDispatch } from 'react-redux';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableItem, SortableOverlay } from './components';
import { updateChosenActivities } from '@/store/vacation/vacationReducer';
import { Paper } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export function SortableList() {
  const dispatch = useDispatch();

  const chosenActivities = useSelector((state) => state.vacation.chosenActivities);

  const [active, setActive] = useState(null);
  const activeItem = useMemo(() => {
    const activeItem = chosenActivities
      ? chosenActivities.find((item) => item.id === active?.id)
      : false;

    if (activeItem) {
      return {
        ...activeItem,
        zIndex: active ? active.data.current.sortable.index + 1 : false,
      };
    } else return;
  }, [active, chosenActivities]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const renderItem = (activity) => <SortableItem id={activity.id} activity={activity} />;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active);
      }}
      onDragEnd={({ active, over }) => {
        let changedOrder;

        if (over && active.id !== over?.id) {
          const activeIndex = chosenActivities.findIndex(({ id }) => id === active.id);
          const overIndex = chosenActivities.findIndex(({ id }) => id === over.id);

          changedOrder = arrayMove(chosenActivities, activeIndex, overIndex);
        }

        if (changedOrder) dispatch(updateChosenActivities(changedOrder));
        setActive(null);
      }}
      onDragCancel={() => {
        setActive(null);
      }}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={chosenActivities} strategy={verticalListSortingStrategy}>
        <ul className='chosen-activities-list' role='application'>
          {chosenActivities && chosenActivities.length > 0 ? (
            chosenActivities.map((activity, index) => (
              <React.Fragment key={activity.id}>
                {renderItem({ ...activity, zIndex: index + 1 })}
              </React.Fragment>
            ))
          ) : (
            <Paper elevation={3} role='application' className='no-activity'>
              <AutoGraphIcon /> <span>No chosen activities</span>
            </Paper>
          )}
        </ul>
      </SortableContext>
      <SortableOverlay>{activeItem ? renderItem(activeItem) : null}</SortableOverlay>
    </DndContext>
  );
}
