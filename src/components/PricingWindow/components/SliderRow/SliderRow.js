import { useRef, useState } from "react";
import {
   SliderRowWrapper,
   Line,
   GreenLine,
   Circle,
   RightArrow,
   LeftArrow,
} from "./SliderRow.css";

const SliderRow = ({ handleBarStatus }) => {
   const emptyBarRef = useRef();
   const greenBarRef = useRef();
   const circleRef = useRef();
   const [isClicked, setIsClicked] = useState(false);
   let subscriptionType = 1;
   let circlePosition = 0;
   let lineWidth = 0;
   const getCirclePosition = (e) => {
      const lineX = emptyBarRef.current.getBoundingClientRect().x;
      lineWidth = emptyBarRef.current.getBoundingClientRect().width;
      circlePosition = e.pageX - lineX;
      if (circlePosition < 0) circlePosition = 0;
      else if (circlePosition > lineWidth) circlePosition = lineWidth;
      return circlePosition;
   };
   const mouseMove = (e) => {
      if (isClicked && e.buttons) {
         circlePosition = getCirclePosition(e);
         lineWidth = emptyBarRef.current.getBoundingClientRect().width;
         subscriptionType =
            Math.floor(((circlePosition / lineWidth + 0.2) * 100) / 20) > 5
               ? 5
               : Math.floor(((circlePosition / lineWidth + 0.2) * 100) / 20);
         handleBarStatus(subscriptionType);
         circleRef.current.style.left = `${circlePosition}px`;
         greenBarRef.current.style.width = `${circlePosition}px`;
      } else return;
   };
   const handleMouseClick = (e) => {
      if (e.type === "mousedown") setIsClicked(true);
      else {
         setIsClicked(false);
         circlePosition = getCirclePosition(e);
         lineWidth = emptyBarRef.current.getBoundingClientRect().width;
         subscriptionType =
            Math.floor(((circlePosition / lineWidth + 0.2) * 100) / 20) > 5
               ? 5
               : Math.floor(((circlePosition / lineWidth + 0.2) * 100) / 20);
         handleBarStatus(subscriptionType);
      }
   };

   return (
      <SliderRowWrapper>
         <Line ref={emptyBarRef}>
            <GreenLine ref={greenBarRef} />
            <Circle
               onMouseDown={handleMouseClick}
               onMouseUp={handleMouseClick}
               onMouseMove={mouseMove}
               ref={circleRef}
            >
               <LeftArrow />
               <RightArrow />
            </Circle>
         </Line>
      </SliderRowWrapper>
   );
};
export default SliderRow;
