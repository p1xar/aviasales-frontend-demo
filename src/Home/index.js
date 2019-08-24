import React from 'react';

import TravelList from './TravelList';
import BestPrices from './BestPrices';
import Agencies from './Agencies';
import MainOffers from './MainOffers';

export default () => {
    return(
        <div>
            <TravelList />
            <BestPrices />
            <Agencies />
            <MainOffers />
        </div>
    );
}