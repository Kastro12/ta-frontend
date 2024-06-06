import React, { useState } from 'react';
import { InputQuantity } from '@/forms/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { childrenAge } from '@/data';
import { addChildrenYears, removeChildrenYears } from '@/store/vacation/vacationReducer';
import Select from 'react-select';

const NumberOfPersonsForm = () => {
  const dispatch = useDispatch();
  const adults = useSelector((state: RootState) => state.vacation.adults);
  const children = useSelector((state: RootState) => state.vacation.children);
  const childrenYears = useSelector((state: RootState) => state.vacation.childrenYears);

  const [isOpenChildrenField, setIsOpenChildrenField] = useState<boolean>(
    children > 0 ? true : false
  );

  const extraHandleIncrement = () => {
    if (children == Number(1)) {
      setIsOpenChildrenField(false);
      return;
    }

    if (!isOpenChildrenField) {
      setIsOpenChildrenField(true);
      return;
    }

    return null;
  };

  return (
    <div className='NumberOfPersonsForm'>
      <div className='content'>
        <div className='quantity-field adults'>
          <span className={`label`}>Adults</span>
          <InputQuantity quantity={adults} type='adults' />
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
          />

          {isOpenChildrenField && (
            <div className='children-age-info'>
              <ul>
                {[...Array(children)].map((_, index) => {
                  const currentData = childrenYears.find((year) => year.position == index);
                  const currentValue = currentData
                    ? childrenAge.find((age) => age.value == currentData.years)
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
                        isSearchable={true}
                        options={childrenAge}
                        placeholder={'Age needed'}
                        value={currentValue}
                        onChange={(value: any) =>
                          value === null && currentData
                            ? dispatch(removeChildrenYears(currentData.position))
                            : dispatch(addChildrenYears({ years: value.value, position: index }))
                        }
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              <p style={{ margin: '3px 0', fontSize: '13px' }}>
                Please indicate the age of each child. It helps us ensure we have child seats for a safe
                trip.
              </p>
            </div>
          )}

          {/* {children > 0 && (
            <ul className='children-age'>
              <RenderList />
            </ul>
          )} */}
        </div>

        {/* <div>Age needed</div> */}
      </div>
    </div>
  );
};

export default NumberOfPersonsForm;
