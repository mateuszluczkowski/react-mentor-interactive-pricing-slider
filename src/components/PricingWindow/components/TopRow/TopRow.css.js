import styled from "styled-components";

export const PageViews = styled.div`
   display: flex;
   align-items: center;
   line-height: ${({ theme }) => Math.floor(theme.font.priceFontSize * 1.15)}px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-weight: 800;
   letter-spacing: 2px;
   @media (max-width: 768px) {
      order: 1;
      flex-basis: 100%;
      justify-content: center;
   }
`;
export const Price = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   font-size: ${({ theme }) => theme.font.priceFontSize}px;
   font-weight: 800;
   margin-right: 0;
   color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
   @media (max-width: 768px) {
      order: 3;
      flex-basis: 100%;
      justify-content: center;
   }
`;
export const SubPrice = styled.div`
   font-weight: 600;
   font-size: 16px;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   padding-left: 10px;
`;
