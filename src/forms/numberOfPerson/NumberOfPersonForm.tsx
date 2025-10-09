import React from 'react';
import { InputQuantity } from '@/forms/components';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Select from 'react-select';
import { childrenAge } from '@/data';
import { Popover } from '@mui/material';
import { useTranslations } from 'next-intl';

const NumberOfPersonForm = ({
  adults,
  children,
  childrenYears,
  isOpenChildrenField,
  setIsOpenChildrenField,
  extraHandleIncrement,
  extraHandleDecrement,
  handleChildAgeChange,
  handleDecrement,
  handleIncrement,
}: {
  adults: number;
  children: number;
  childrenYears: any[];
  isOpenChildrenField: HTMLButtonElement | null;
  setIsOpenChildrenField: (isOpen: HTMLButtonElement | null) => void;
  extraHandleIncrement: (event?: any) => void;
  extraHandleDecrement: () => void;
  handleChildAgeChange: (index: number, value: any) => void;
  handleDecrement: (type: string) => void;
  handleIncrement: (type: string) => void;
}) => {
  const handleClosePopover = () => {
    setIsOpenChildrenField(null);
  };
  const openPopover = Boolean(isOpenChildrenField);
  const idPopover = openPopover ? 'simple-popover' : undefined;
  const globalT = useTranslations('global');

  return (
    <div className='NumberOfPersonsForm'>
      <div className='content'>
        <div className='quantity-field adults'>
          <span className={`label`}>{globalT('Adults')}</span>
          <InputQuantity
            quantity={adults}
            type='adults'
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div
          className='quantity-field children'
          onClick={(event) => {
            if (extraHandleIncrement && extraHandleIncrement !== null) {
              extraHandleIncrement(event);
            }
          }}
        >
          <span
            className={`label${isOpenChildrenField ? ' active' : ''} ${
              children > 0 ? ' clickable' : ''
            }`}
            onClick={(event) => {
              if (children > 0) {
                extraHandleIncrement(event);
              } else {
                event.stopPropagation();
              }
            }}
          >
            {globalT('Children')}
            {children > 0 && <KeyboardArrowDownOutlinedIcon />}
          </span>
          <InputQuantity
            quantity={children}
            type='children'
            extraHandleIncrement={extraHandleIncrement}
            extraHandleDecrement={handleClosePopover}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            handleChildAgeChange={handleChildAgeChange}
            openPopover={openPopover}
          />

          <Popover
            id={idPopover}
            open={openPopover}
            anchorEl={isOpenChildrenField}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            className='NumberOfPersonForm_popover'
            sx={{ overflow: 'unset' }}
          >
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
                        options={childrenAge.map((childAge) => {
                          return {
                            ...childAge,
                            label: globalT(`age-needed.options.${childAge.value}`),
                          };
                        })}
                        placeholder={globalT('age-needed.label')}
                        value={
                          currentValue
                            ? {
                                ...currentValue,
                                label: globalT(`age-needed.options.${currentValue.value}`),
                              }
                            : null
                        }
                        onChange={(value) => handleChildAgeChange(index, value)}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              <p style={{ margin: '3px 0', fontSize: '13px' }}>{globalT('age-needed.info')}</p>
            </div>
          </Popover>

          {/* {isOpenChildrenField && (
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NumberOfPersonForm;
