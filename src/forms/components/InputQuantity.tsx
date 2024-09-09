import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from 'react-redux';

interface QuantityInput {
  quantity: number;
  type: 'adults' | 'children';
  extraHandleDecrement?: (() => void) | null;
  extraHandleIncrement?: ((event?: any) => void) | null;
  handleDecrement: any;
  handleIncrement: any;
  handleChildAgeChange?: (index: number, value: any) => void;
  openPopover?: boolean;
}

const QuantityInput = ({
  quantity,
  type,
  extraHandleDecrement,
  extraHandleIncrement,
  handleDecrement,
  handleIncrement,
  handleChildAgeChange,
  openPopover,
}: QuantityInput) => {
  const dispatch = useDispatch();

  return (
    <div className='quantity-input' style={openPopover ? { zIndex: '9999' } : {}}>
      <span
        className='decrement'
        onClick={(event) => {
          if (quantity == 1 && extraHandleDecrement) extraHandleDecrement();

          dispatch(handleDecrement({ type }));

          if (handleChildAgeChange && quantity > 0 && type === 'children') {
            handleChildAgeChange(quantity - 1, null);
          }
        }}
      >
        <RemoveOutlinedIcon />
      </span>
      <span
        className='quantity'
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {quantity}
      </span>
      <span
        className='increment'
        onClick={(event) => {
          dispatch(handleIncrement({ type }));
        }}
      >
        <AddOutlinedIcon />
      </span>
    </div>
  );
};

export default QuantityInput;
