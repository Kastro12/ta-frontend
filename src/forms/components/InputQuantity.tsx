import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from 'react-redux';

interface QuantityInput {
  quantity: number;
  type: 'adults' | 'children';
  extraHandleDecrement?: (() => void) | null;
  extraHandleIncrement?: (() => void) | null;
  handleDecrement: any;
  handleIncrement: any;
  handleChildAgeChange?: (index: number, value: any) => void;
}

const QuantityInput = ({
  quantity,
  type,
  extraHandleDecrement,
  extraHandleIncrement,
  handleDecrement,
  handleIncrement,
  handleChildAgeChange,
}: QuantityInput) => {
  const dispatch = useDispatch();

  return (
    <div className='quantity-input'>
      <span
        className='decrement'
        onClick={() => {
          dispatch(handleDecrement({ type }));
          if (extraHandleDecrement && extraHandleDecrement !== null) extraHandleDecrement();

          if (handleChildAgeChange && quantity > 0 && type === 'children') {
            handleChildAgeChange(quantity - 1, null);
          }
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
