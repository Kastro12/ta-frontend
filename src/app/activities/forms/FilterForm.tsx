'use client';
import { useCallback } from 'react';
import Select from 'react-select';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { activityCategories, activityLocations } from '@/data';

const FilterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const categoryParam = searchParams.get('category');
  const locationParam = searchParams.get('location');

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
      router.push(filterLink);
    },
    [locationParam, categoryParam]
  );

  return (
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
          isSearchable={true}
          name='category'
          options={activityCategories}
          placeholder={'Category'}
          onChange={(e) => handleFilterChange(e, 'category')}
          components={{
            IndicatorSeparator: () => null,
          }}
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
          isSearchable={true}
          name='location'
          options={activityLocations}
          placeholder={'Location'}
          onChange={(e) => handleFilterChange(e, 'location')}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};

export default FilterForm;
