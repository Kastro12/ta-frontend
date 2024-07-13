import React, { createContext, useContext, useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch } from 'react-redux';
import { Paper, IconButton } from '@mui/material';
import { button } from '@/utils/re-styledComponents/index';
import SwipeVerticalOutlinedIcon from '@mui/icons-material/SwipeVerticalOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { removeActivity } from '@/store/vacation/vacationReducer';
import { usePathname } from 'next/navigation';

const SortableItemContext = createContext({
  attributes: {},
  listeners: undefined,
  ref() {},
});

export function SortableItem({ id, activity }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );
  const style = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  let durationText = '';
  switch (activity.durationInDays) {
    case 1:
      durationText += '1 day';
      break;
    case 0.5:
      durationText += 'Half a day';
      break;
    default:
      durationText += `${activity.durationInDays} days`;
      break;
  }

  return (
    <SortableItemContext.Provider value={context}>
      <Paper
        elevation={3}
        key={activity.id}
        ref={setNodeRef}
        role='application'
        className='shoppingCartActivityList'
        style={style}
      >
        <li>
          <div className={`image-wrap`}>
            <img src={activity.imageLink} />
          </div>

          <div className='content'>
            <div className='info'>
              <p>{activity.title}</p>
              <div className='sub-info'>
                <span className='gray-label'>{activity.category}</span>
                <span className='gray-label'>{durationText}</span>
              </div>
            </div>

            {pathname !== '/book-vacation' && (
              <>
                <div className='action remove'>
                  <IconButton
                    sx={{ ...button }}
                    id='shoppingCartIcon'
                    onClick={() => dispatch(removeActivity(activity.id))}
                    size='small'
                    title='Remove activity'
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </div>

                <DragHandle />
              </>
            )}
          </div>
        </li>
      </Paper>
    </SortableItemContext.Provider>
  );
}

export function DragHandle() {
  const { attributes, listeners, ref } = useContext(SortableItemContext);
  return (
    <div {...attributes} {...listeners} ref={ref} className='action drag'>
      <IconButton
        sx={{ ...button }}
        id='shoppingCartIcon'
        onClick={() => console.log('reorder')}
        size='small'
        title='Rearrange activities'
      >
        <SwipeVerticalOutlinedIcon />
      </IconButton>
    </div>
  );
}
