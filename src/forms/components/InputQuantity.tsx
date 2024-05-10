import React, { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='quantity-input'>
      <span className='decrement' onClick={handleDecrement}>
        <RemoveOutlinedIcon />
      </span>
      <span className='quantity'>{quantity}</span>
      <span className='increment' onClick={handleIncrement}>
        <AddOutlinedIcon />
      </span>
    </div>
  );
};

export default QuantityInput;
