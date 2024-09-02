'use client';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-international-phone/style.css';
import { getCountryCode } from '@/utils/geolocation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { BookVacationProps } from '@/forms/form.interface';

const handleBookVacationSubmit = (Component: React.ComponentType<any>) => {
  const WrappedComponent = ({ ...props }: any) => {
    const router = useRouter();

    const [initialCountryCode, setInitialCountryCode] = useState<string | undefined>();

    const startDate = useSelector((state: RootState) => state.vacation.startDate);
    const finishDate = useSelector((state: RootState) => state.vacation.finishDate);
    const adults = useSelector((state: RootState) => state.vacation.adults);
    const children = useSelector((state: RootState) => state.vacation.children);
    const chosenActivities = useSelector((state: RootState) => state.vacation.chosenActivities);
    const childrenYears = useSelector((state: RootState) => state.vacation.childrenYears);
    const accommodation_radio = useSelector(
      (state: RootState) => state.predefinedVacation.accommodation_radio
    );
    const transportation_radio = useSelector(
      (state: RootState) => state.predefinedVacation.transportation_radio
    );
    useEffect(() => {
      const fetchCountryCode = async () => {
        const countryCode = await getCountryCode();
        setInitialCountryCode(countryCode || 'rs');
      };

      fetchCountryCode();
    }, []);

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<BookVacationProps>({
      defaultValues: {
        honeypot: '',
        termsAccepted: false,
      },
    });
    const onSubmit: SubmitHandler<BookVacationProps> = async (data: any) => {
      if (data.honeypot) {
        return;
      }

      const formData = new FormData();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formData.append(key, data[key]);
        }
      }
      formData.append('access_key', `${process.env.NEXT_PUBLIC_ACCESS_KEY}`);

      formData.append('startDate', `${startDate}`);
      formData.append('finishDate', `${finishDate}`);

      formData.append('adults', `${adults}`);
      formData.append('children', `${children}`);

      formData.append('accommodation_radio', `${accommodation_radio}`);
      formData.append('transportation_radio', `${transportation_radio}`);

      if (children > 0 && childrenYears.length > 0) {
        childrenYears.forEach((data, index) => {
          formData.append(`childrenAge[${index}]`, `${data.years}`);
        });
      }

      if (chosenActivities.length > 0) {
        chosenActivities.forEach((activity, index) => {
          formData.append(
            `activity[${index}]`,
            `${activity.title} ${activity.location} ${activity.category} ${activity.id}`
          );
        });
      }

      const object = Object.fromEntries(formData.entries());
      const json = JSON.stringify(object);

      localStorage.setItem('formSubmitted', 'true');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: json,
        });

        const result = await res.json();

        if (result.success) {
          router.push('/book-vacation/success');
        } else {
          router.push('/book-vacation/error');
        }
      } catch (error) {
        router.push('/book-vacation/error');
      }
    };

    return (
      <Component
        {...props}
        initialCountryCode={initialCountryCode}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        control={control}
      />
    );
  };

  WrappedComponent.displayName = `handleBookVacationSubmit(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};

export default handleBookVacationSubmit;
