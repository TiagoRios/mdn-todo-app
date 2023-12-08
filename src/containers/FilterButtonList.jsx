import React from 'react';
import { useSelector } from 'react-redux';

import FILTER_MAP from '../util/filterMap';
import FilterButton from '../components/FilterButton';

const FILTER_NAMES = Object.keys(FILTER_MAP);

function FilterButtonList() {
  const filter = useSelector((state) => state.filtro.name);

  return (
    <div className="filters btn-group stack-exception">
      { FILTER_NAMES.map((name) => (
        <FilterButton
          isPressed={name === filter}
          key={name}
          name={name}
        />
      )) }
    </div>
  );
}

export default FilterButtonList;
