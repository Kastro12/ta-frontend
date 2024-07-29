import React, { createContext, useContext, useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItemContext = createContext({
  attributes: {},
  listeners: undefined,
  ref() {},
});

export function SortableItem({ id }) {
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
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: '1',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 'calc(4px / var(--scale-x, 1))',
    boxSizing: 'border-box',
    listStyle: 'none',
    color: '#333',
  };

  return (
    <SortableItemContext.Provider value={context}>
      <div className='' ref={setNodeRef} style={style}>
        !!!!!!!!!! Element !!!!!!!!!!!!!!
        <DragHandle />
      </div>
    </SortableItemContext.Provider>
  );
}

export function DragHandle({ zIndex }) {
  const { attributes, listeners, ref } = useContext(SortableItemContext);
  return (
    <div {...attributes} {...listeners} ref={ref}>
      <span className='zindex'>{zIndex} Layer</span>
    </div>
  );
}
