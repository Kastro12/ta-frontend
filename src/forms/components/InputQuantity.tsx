import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { useDispatch } from 'react-redux';
import { handleDecrement, handleIncrement } from '@/store/vacation/vacationReducer';

interface QuantityInput {
  quantity: number;
  type: 'adults' | 'children';
  extraHandleDecrement?: (() => void) | null;
  extraHandleIncrement?: (() => void) | null;
}

const QuantityInput = ({
  quantity,
  type,
  extraHandleDecrement,
  extraHandleIncrement,
}: QuantityInput) => {
  const dispatch = useDispatch();

  return (
    <div className='quantity-input'>
      <span
        className='decrement'
        onClick={() => {
          dispatch(handleDecrement({ type }));
          if (extraHandleDecrement && extraHandleDecrement !== null) extraHandleDecrement();
        }}
      >
        <RemoveOutlinedIcon />
      </span>
      <span className='quantity'>{quantity}</span>
      <span
        className='increment'
        onClick={() => {
          dispatch(handleIncrement({ type }));
          if (extraHandleIncrement && extraHandleIncrement !== null) extraHandleIncrement();
        }}
      >
        <AddOutlinedIcon />
      </span>
    </div>
  );
};

export default QuantityInput;
