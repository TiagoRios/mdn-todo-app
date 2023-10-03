import FilterButton from "../components/FilterButton";

import { FILTER_MAP } from "../util/filterMap";

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function FilterButtonList({ filter, setFilter }) {
    return (
        <div className="filters btn-group stack-exception">
            {
                FILTER_NAMES.map((name) => (
                    <FilterButton
                        key={name}
                        name={name}
                        isPressed={name === filter}
                        setFilter={setFilter}
                    />
                ))
            }
        </div>
    )
}