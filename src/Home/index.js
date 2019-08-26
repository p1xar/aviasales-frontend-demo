import React from 'react';

import TravelList from './TravelList';
import BestPrices from './BestPrices';
import Agencies from './Agencies';
import MainOffers from './MainOffers';
import MainArticles from './MainArticles';

export default () => {
    return(
        <div>
            <TravelList />
            <BestPrices />
            <Agencies />
            <MainOffers />
            <MainArticles />
        </div>
    );
}