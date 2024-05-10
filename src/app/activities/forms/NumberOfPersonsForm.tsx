import { InputQuantity } from '@/forms/components';

const NumberOfPersonsForm = () => {
  return (
    <div className='NumberOfPersonsForm'>
      <div className='content'>
        <div className='quantity-field adults'>
          <span className='label'>Adults</span>
          <InputQuantity />
        </div>
        <div className='quantity-field children'>
          <span className='label'>Children</span> <InputQuantity />
        </div>

        {/* <div>Age needed</div> */}
      </div>
    </div>
  );
};

export default NumberOfPersonsForm;
