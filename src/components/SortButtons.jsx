import React, { useState } from "react";

const SortButtons = ({ onSortByName, onSortByDate, onReset }) => {
    const [isNameAsc, setIsNameAsc] = useState(true);
    const [isDateAsc, setIsDateAsc] = useState(true);

    const handleIsNameAsc = () => {
        onSortByName(isNameAsc);
        setIsNameAsc(!isNameAsc);
    }

    const handleIsNewDate = () => {
        onSortByDate(isDateAsc);
        setIsDateAsc(!isDateAsc);
    }

    return (
        <div className="buttons d-flex flex-row justify-content-end align-items-center float-end">
            <p className="px-3 text-primary mb-0 d-flex" type="button" onClick={handleIsNewDate}>
                Date
                <i className={`bi ${isDateAsc ? "bi-caret-down" : "bi-caret-up"} ms-2 text-secondary`}></i>

            </p>
            <p className="px-3 text-primary mb-0 d-flex" type="button" onClick={handleIsNameAsc}>
                Name
                <i className={`bi ${isNameAsc ? "bi-caret-down" : "bi-caret-up"} ms-2 text-secondary`}></i>
            </p>
            <p className="px-3 text-danger mb-0" type="button" onClick={onReset}>
                Reset
            </p>
        </div>
    );
};

export default SortButtons;
