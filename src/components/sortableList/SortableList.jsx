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


const SortableListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '0',
  listStyle: 'none',
};

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

  const renderItem = (item) => <SortableItem id={item.id} item={item} />;

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActive(active);
      }}
      onDragEnd={({ active, over }) => {
        // let changedOrder;

        // if (over && active.id !== over?.id) {
        //   const activeIndex = chosenActivities.findIndex(
        //     ({ id }) => id === active.id
        //   );
        //   const overIndex = chosenActivities.findIndex(
        //     ({ id }) => id === over.id
        //   );

        //   changedOrder = arrayMove(chosenActivities, activeIndex, overIndex);
        // }

        // if (changedOrder) dispatch(updateImagesInCanvas(changedOrder));
        setActive(null);
      }}
      onDragCancel={() => {
        setActive(null);
      }}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={chosenActivities} strategy={verticalListSortingStrategy}>
        <ul className='SortableList' style={SortableListStyle} role='application'>
          {chosenActivities && chosenActivities.length > 0 ? (
            chosenActivities.map((item, index) => (
              <React.Fragment key={item.id}>
                {renderItem({ ...item, zIndex: index + 1 })}
              </React.Fragment>
            ))
          ) : (
            <div className='image-properties image-gen-v2'>No data</div>
          )}
        </ul>
      </SortableContext>
      <SortableOverlay>{activeItem ? renderItem(activeItem) : null}</SortableOverlay>
    </DndContext>
  );
}
