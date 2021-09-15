import {
   WrapperToggler,
   Toggler,
   TogglerCircle,
   Option,
   DiscountText,
} from "./TogglerRow.css";
const TogglerRow = ({ handleToggler, toggler }) => {
   return (
      <WrapperToggler>
         <Option>Monthly Billing</Option>
         <Toggler onClick={handleToggler}>
            <TogglerCircle toggler={toggler} />
         </Toggler>
         <Option>Yearly Billing</Option>
         <DiscountText>25% discount</DiscountText>
      </WrapperToggler>
   );
};
export default TogglerRow;
