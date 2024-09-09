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

    const [isOpenChildrenField, setIsOpenChildrenField] = useState<HTMLButtonElement | null>(null);

    const extraHandleIncrement = (event: any) => {
      if (!isOpenChildrenField) {
        setIsOpenChildrenField(event.currentTarget);
        return;
      }
      return null;
    };

    const extraHandleDecrement = () => {
      setIsOpenChildrenField(null);
    };

    const handleChildAgeChange = (index: number, value: any) => {
      const currentData = childrenYears.find((year) => year.position === index);

      if (value === null && currentData) {
        dispatch(removeChildrenYears(currentData.position));
      } else if (value) {
        dispatch(addChildrenYears({ years: value.value, position: index }));
        if (childrenYears.length + 1 == children) setIsOpenChildrenField(null);
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
        extraHandleDecrement={extraHandleDecrement}
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
