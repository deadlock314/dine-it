import React from 'react';
import ResturantsList from './RestaurantsList';

function ResListWithSearch(props) {
    return (
        <div className="main-res-list">
            <div>
                <input type="text"/>
            </div>
            <ResturantsList/>
        </div>
    );
}

export default ResListWithSearch;