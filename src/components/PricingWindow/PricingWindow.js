import { useState, useEffect } from "react";
import { Window, TopRow, BarRow, TogglerRow, BottomRow } from "./components";
import subscriptionTypes from "data/subscriptionTypes";

const PricingWindow = () => {
   const [subscriptionType, setSubscriptionType] = useState(0);
   const [price, setPrice] = useState(8);
   const [pageviews, setPageviews] = useState("10K");
   const [toggler, setToggler] = useState(true);

   const numberOfOptions = Object.keys(subscriptionTypes).length;
   const discount = 0.75;

   const handleToggler = () => {
      setToggler((prevState) => !prevState);
   };
   const handleBarStatus = (currentSliderPosition) => {
      if (currentSliderPosition > 4) currentSliderPosition = 4;
      else if (currentSliderPosition < 0) currentSliderPosition = 0;
      return setSubscriptionType(currentSliderPosition);
   };

   const updateAllData = (currentSubscribeType) => {
      setPrice(() =>
         toggler
            ? subscriptionTypes[currentSubscribeType].price * 12 * discount
            : subscriptionTypes[currentSubscribeType].price
      );
      setPageviews(subscriptionTypes[currentSubscribeType].pageviews);
   };
   useEffect(() => {
      updateAllData(subscriptionType);
   });
   return (
      <Window>
         <TopRow price={price} toggler={toggler} pageviews={pageviews}></TopRow>
         <BarRow
            handleBarStatus={handleBarStatus}
            numberOfOptions={numberOfOptions}
         ></BarRow>
         <TogglerRow
            toggler={toggler}
            handleToggler={handleToggler}
         ></TogglerRow>
         <BottomRow></BottomRow>
      </Window>
   );
};
export default PricingWindow;
