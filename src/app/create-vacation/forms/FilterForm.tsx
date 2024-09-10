'use client';
import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { activityCategories, activityLocations } from '@/data';
import { useDispatch } from 'react-redux';
import { filterActivityList } from '@/store/activities/activitiesReducer';
import { updateCurrentPage } from '@/store/activities/activitiesReducer';
import { Suspense } from 'react';

interface FilterFormProps {
  setIsAllActivitiesLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ setIsAllActivitiesLoaded }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const categoryParam = searchParams.get('category');
  const locationParam = searchParams.get('location');

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Funkcija za proveru širine ekrana
    function checkIfMobile() {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    }

    // Provera prilikom inicijalnog rendera
    checkIfMobile();

    // Dodavanje event listener-a za promenu veličine prozora
    window.addEventListener('resize', checkIfMobile);

    // Uklanjanje event listener-a prilikom unmount-a
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    setIsAllActivitiesLoaded(false);
    dispatch(updateCurrentPage(1));
    dispatch(filterActivityList({ category: categoryParam, location: locationParam }));
  }, [categoryParam, locationParam]);

  const createLinkWithParams = (baseUrl: string, params: { [key: string]: string }): string => {
    const urlParams = new URLSearchParams(params).toString();
    return `${baseUrl}?${urlParams}`;
  };

  const handleFilterChange = useCallback(
    (e: { label: string; value: string; id: string } | null, type: 'category' | 'location') => {
      let filterObject = {};

      switch (type) {
        case 'category':
          if (e != null) filterObject = { ...filterObject, category: e.value };
          if (locationParam) filterObject = { ...filterObject, location: locationParam };
          if (e === null) break;
          break;
        case 'location':
          if (e != null) filterObject = { ...filterObject, location: e.value };
          if (categoryParam) filterObject = { ...filterObject, category: categoryParam };
          if (e === null) break;
          break;
      }

      const filterLink = createLinkWithParams(pathname, filterObject);
      router.push(filterLink, { scroll: false });
    },
    [locationParam, categoryParam]
  );

  return (
    <Suspense>
      <div className='action-filter-wrapper'>
        <span className='label'>Filter by:</span>
        <div className='field'>
          <Select
            id='category'
            instanceId='category'
            className={`select-input-field-container just-line`}
            classNamePrefix={`select-input-field`}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={!isMobile}
            name='category'
            options={activityCategories}
            defaultValue={activityCategories.filter((category) => category.value == categoryParam)}
            placeholder={'Category'}
            onChange={(e) => handleFilterChange(e, 'category')}
            components={{
              IndicatorSeparator: () => null,
            }}
            aria-label='Select a category'
          />
        </div>
        <div className='field'>
          <Select
            id='location'
            instanceId='location'
            className={`select-input-field-container just-line`}
            classNamePrefix={`select-input-field`}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={!isMobile}
            name='location'
            options={activityLocations}
            defaultValue={activityLocations.filter((location) => location.value == locationParam)}
            placeholder={'Location'}
            onChange={(e) => handleFilterChange(e, 'location')}
            components={{
              IndicatorSeparator: () => null,
            }}
            aria-label='Select a location'
          />
        </div>
      </div>
    </Suspense>
  );
};

export default FilterForm;
