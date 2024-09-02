import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import {
  addChildrenYears,
  removeChildrenYears,
  handleDecrement,
  handleIncrement,
} from '@/store/vacation/predefinedVacationReducer';

const handleNumberOfPerson = (Component: React.ComponentType<any>) => {
  const WrappedComponent = (props: any) => {
    const dispatch = useDispatch();
    const adults = useSelector((state: RootState) => state.predefinedVacation.adults);
    const children = useSelector((state: RootState) => state.predefinedVacation.children);
    const childrenYears = useSelector((state: RootState) => state.predefinedVacation.childrenYears);

    const [isOpenChildrenField, setIsOpenChildrenField] = useState<boolean>(
      children > 0 ? true : false
    );

    const extraHandleIncrement = () => {
      if (children === 1) {
        setIsOpenChildrenField(false);
        return;
      }

      if (!isOpenChildrenField) {
        setIsOpenChildrenField(true);
        return;
      }

      return null;
    };

    const handleChildAgeChange = (index: number, value: any) => {
      const currentData = childrenYears.find((year) => year.position === index);

      if (value === null && currentData) {
        dispatch(removeChildrenYears(currentData.position));
      } else if (value) {
        dispatch(addChildrenYears({ years: value.value, position: index }));
        if (childrenYears.length + 1 == children) setIsOpenChildrenField(false);
      }
    };

    return (
      <Component
        {...props}
        adults={adults}
        childrenYears={childrenYears}
        isOpenChildrenField={isOpenChildrenField}
        setIsOpenChildrenField={setIsOpenChildrenField}
        extraHandleIncrement={extraHandleIncrement}
        handleChildAgeChange={handleChildAgeChange}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      >
        {children}
      </Component>
    );
  };
  WrappedComponent.displayName = `handleNumberOfPerson(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default handleNumberOfPerson;
