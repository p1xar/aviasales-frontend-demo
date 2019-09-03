import React from "react";

import TravelList from "./TravelList";
import BestPrices from "./BestPrices";
import Agencies from "./Agencies";
import MainOffers from "./MainOffers";
import MainArticles from "./MainArticles";
import MobileApplication from "./MobileApplication";
import Header from "../Header";

export default () => {
  return (
    <div>
      <Header />
      <TravelList />
      <BestPrices />
      <Agencies />
      <MainOffers />
      <MainArticles />
      <MobileApplication />
    </div>
  );
};
