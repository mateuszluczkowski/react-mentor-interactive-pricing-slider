import { PageViews, Price, SubPrice } from "./TopRow.css";
const TopRow = ({ price, pageviews, toggler }) => {
   return (
      <>
         <PageViews>{pageviews} pageviews</PageViews>
         <Price>
            ${price}.00<SubPrice>{`/${toggler ? "year" : "month"}`}</SubPrice>
         </Price>
      </>
   );
};
export default TopRow;
