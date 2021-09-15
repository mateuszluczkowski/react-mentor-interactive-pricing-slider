import styled from "styled-components";

export const WrapperToggler = styled.div`
   display: flex;
   flex-basis: 100%;
   justify-content: flex-end;
   align-items: center;
   margin-right: 10px;
   padding: 30px 50px;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-weight: 600;
   @media (max-width: 768px) {
      order: 4;
      padding: 30px 0px;
      justify-content: center;
   }
`;
export const Toggler = styled.div`
   position: relative;
   display: block;
   margin: 0 5px;
   width: 40px;
   height: 22px;
   background-color: ${({ theme, toggler }) =>
      toggler
         ? theme.colors.primary.softCyan
         : theme.colors.neutral.lightGrayishBlueSecond};
   border-radius: 10px;
   padding: 3px;
   transition: 0.3s;
   cursor: pointer;
   @media (max-width: 768px) {
      width: 45px;
      height: 28px;
      border-radius: 15px;
   }
`;
export const TogglerCircle = styled.div`
   width: 15px;
   height: 15px;
   background-color: white;
   border-radius: 50%;
   position: absolute;
   left: ${({ toggler }) => (toggler ? "21px" : "4px")};
   top: 50%;
   transform: translateY(-50%);
   transition: 0.3s;
   @media (max-width: 768px) {
      width: 20px;
      height: 20px;
   }
`;
export const Option = styled.div`
   margin: 0 5px;
   font-size: 14px;
   @media (max-width: 768px) {
      margin: 0 px;
   }
`;
export const DiscountText = styled.div`
   margin: 0 5px;
   padding: 4px 7px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.primary.lightGrayishRed};
   color: ${({ theme }) => theme.colors.primary.lightRed};
   font-weight: 800;
   font-size: 11px;
`;
