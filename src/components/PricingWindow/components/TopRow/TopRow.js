import { TopWrapper, PageViews, Price, SubPrice } from "./TopRow.css";
const TopRow = ({ price, pageviews, toggler }) => {
   return (
      <TopWrapper>
         <PageViews>{pageviews} pageviews</PageViews>
         <Price>
            ${price}.00<SubPrice>{`/${toggler ? "year" : "month"}`}</SubPrice>
         </Price>
      </TopWrapper>
   );
};
export default TopRow;
