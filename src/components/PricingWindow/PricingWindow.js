import {
   Window,
   TopRow,
   SliderRow,
   TogglerRow,
   BottomRow,
} from "./PricingWindow.css";

const PricingWindow = () => {
   return (
      <Window>
         <TopRow></TopRow>
         <SliderRow sliderPosition={`40%`}></SliderRow>
         <TogglerRow></TogglerRow>
         <BottomRow></BottomRow>
      </Window>
   );
};
export default PricingWindow;
