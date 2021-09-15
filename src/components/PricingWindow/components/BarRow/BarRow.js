import { useRef } from "react";
import {
   BarWrapper,
   Bar,
   GreenBar,
   Handle,
   RightArrow,
   LeftArrow,
} from "./BarRow.css";

const SliderRow = ({ handleBarStatus, numberOfOptions }) => {
   const emptyBarRef = useRef();
   const greenBarRef = useRef();
   const handleRef = useRef();
   let dragging = false;
   const getHandlePosition = (pageX, barWidth) => {
      const lineX = emptyBarRef.current.getBoundingClientRect().x;
      let handlePosition = pageX - lineX;

      if (handlePosition < 0) handlePosition = 0;
      else if (handlePosition > barWidth) handlePosition = barWidth;

      return handlePosition;
   };
   const mouseMove = (e) => {
      if (dragging) {
         document.body.style.cursor = "grab";
         const barWidth = emptyBarRef.current.getBoundingClientRect().width;
         const handlePosition = getHandlePosition(e.pageX, barWidth);
         const percent = handlePosition / barWidth;
         const subscriptionType = Math.floor(percent * numberOfOptions);
         handleBarStatus(subscriptionType);
         handleRef.current.style.left = `${handlePosition}px`;
         greenBarRef.current.style.width = `${handlePosition}px`;
      } else return;
   };
   const handleMouseClick = (e) => (dragging = true);

   const initEvents = () => {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", () => {
         dragging = false;
         document.body.style.cursor = "auto";
      });
   };
   initEvents();
   return (
      <BarWrapper>
         <Bar ref={emptyBarRef}>
            <GreenBar ref={greenBarRef} />
            <Handle onMouseDown={handleMouseClick} ref={handleRef}>
               <LeftArrow />
               <RightArrow />
            </Handle>
         </Bar>
      </BarWrapper>
   );
};
export default SliderRow;
