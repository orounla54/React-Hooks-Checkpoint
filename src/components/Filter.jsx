import React from 'react';

const Filter = ({ searchString, onSearchChange, rating, onRatingChange }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Rechercher par titre..."
                value={searchString}
                onChange={onSearchChange}
            />
            <input
                type="number"
                placeholder="Filtrer par note..."
                value={rating}
                onChange={onRatingChange}
                min="0"
                max="10"
            />
        </div>
    );
};

export default Filter;