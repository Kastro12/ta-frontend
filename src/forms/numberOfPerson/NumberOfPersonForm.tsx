import React from 'react';
import { InputQuantity } from '@/forms/components';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Select from 'react-select';
import { childrenAge } from '@/data';

const NumberOfPersonForm = ({
  adults,
  children,
  childrenYears,
  isOpenChildrenField,
  setIsOpenChildrenField,
  extraHandleIncrement,
  handleChildAgeChange,
  handleDecrement,
  handleIncrement,
}: {
  adults: number;
  children: number;
  childrenYears: any[];
  isOpenChildrenField: boolean;
  setIsOpenChildrenField: (isOpen: boolean) => void;
  extraHandleIncrement: () => void;
  handleChildAgeChange: (index: number, value: any) => void;
  handleDecrement: (type: string) => void;
  handleIncrement: (type: string) => void;
}) => {
  return (
    <div className='NumberOfPersonsForm'>
      <div className='content'>
        <div className='quantity-field adults'>
          <span className={`label`}>Adults</span>
          <InputQuantity
            quantity={adults}
            type='adults'
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div className='quantity-field children'>
          <span
            className={`label${isOpenChildrenField ? ' active' : ''} ${
              children > 0 ? ' clickable' : ''
            }`}
            onClick={() => {
              if (children > 0) {
                setIsOpenChildrenField(!isOpenChildrenField);
              }
            }}
          >
            Children
            {children > 0 && <KeyboardArrowDownOutlinedIcon />}
          </span>
          <InputQuantity
            quantity={children}
            type='children'
            extraHandleIncrement={!isOpenChildrenField ? () => setIsOpenChildrenField(true) : null}
            extraHandleDecrement={extraHandleIncrement}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />

          {isOpenChildrenField && (
            <div className='children-age-info'>
              <ul>
                {[...Array(children)].map((_, index) => {
                  const currentData = childrenYears.find((year) => year.position === index);
                  const currentValue = currentData
                    ? childrenAge.find((age) => age.value === currentData.years)
                    : null;

                  return (
                    <li key={index}>
                      <Select
                        name={'age-needed'}
                        className={`select-input-field-container ${currentValue ? 'active' : ''}`}
                        classNamePrefix={`select-input-field`}
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        isSearchable={false}
                        options={childrenAge}
                        placeholder={'Age needed'}
                        value={currentValue}
                        onChange={(value) => handleChildAgeChange(index, value)}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              <p style={{ margin: '3px 0', fontSize: '13px' }}>
                Please indicate the age of each child. It helps us ensure we have child seats for a
                safe trip.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberOfPersonForm;
