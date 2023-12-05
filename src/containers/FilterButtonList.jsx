import React from 'react';

import FilterButton from '../components/FilterButton';
import FILTER_MAP from '../util/filterMap';

const FILTER_NAMES = Object.keys(FILTER_MAP);

function FilterButtonList({ filter, setFilter }) {
  return (
    <div className="filters btn-group stack-exception">
      { FILTER_NAMES.map((name) => (
        <FilterButton
          isPressed={name === filter}
          key={name}
          name={name}
          setFilter={setFilter}
        />
      )) }
    </div>
  );
}

export default FilterButtonList;
