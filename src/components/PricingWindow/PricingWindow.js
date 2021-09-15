import { useState, useEffect } from "react";
import { Window, TopRow, SliderRow, TogglerRow, BottomRow } from "./components";
import subscriptionTypes from "data/subscriptionTypes";

const PricingWindow = () => {
   const [subscriptionType, setSubscriptionType] = useState(1);
   const [prevSubscribeType, setPrevSubscribeType] = useState(1);
   const [price, setPrice] = useState(8);
   const [pageviews, setPageviews] = useState("10K");
   const [toggler, setToggler] = useState(true);
   const handleToggler = () => {
      setToggler((prevState) => !prevState);
   };
   const handleBarStatus = (currentSliderPosition) => {
      const checkPrevSubscribeType = (currentValue) => {
         return prevSubscribeType === currentValue
            ? null
            : setSubscriptionType(() => {
                 setPrevSubscribeType(currentValue);
                 return currentValue;
              });
      };
      switch (currentSliderPosition) {
         case 1:
            return checkPrevSubscribeType(currentSliderPosition);
         case 2:
            return checkPrevSubscribeType(currentSliderPosition);
         case 3:
            return checkPrevSubscribeType(currentSliderPosition);
         case 4:
            return checkPrevSubscribeType(currentSliderPosition);
         case 5:
            return checkPrevSubscribeType(currentSliderPosition);
         default:
            return;
      }
   };
   const updateAllData = (currentSubscribeType) => {
      setPrice(() =>
         toggler
            ? subscriptionTypes[currentSubscribeType].price * 12 * 0.75
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
         <SliderRow handleBarStatus={handleBarStatus}></SliderRow>
         <TogglerRow
            toggler={toggler}
            handleToggler={handleToggler}
         ></TogglerRow>
         <BottomRow></BottomRow>
      </Window>
   );
};
export default PricingWindow;
