import React from 'react';

import TravelList from './TravelList';
import BestPrices from './BestPrices';
import Agencies from './Agencies';

export default () => {
    return(
        <div>
            <TravelList />
            <BestPrices />
            <Agencies />
        </div>
    );
}