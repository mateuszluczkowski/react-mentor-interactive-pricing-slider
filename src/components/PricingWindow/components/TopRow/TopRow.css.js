import styled from "styled-components";

const Row = styled.div`
   display: flex;
   flex-basis: 100%;
`;
export const TopWrapper = styled(Row)`
   padding: 50px 50px 10px;
`;
export const PageViews = styled.div`
   display: flex;
   align-items: center;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-weight: 800;
   letter-spacing: 2px;
`;
export const Price = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   font-size: 43px;
   font-weight: 800;
   margin-right: 0;
   color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
`;
export const SubPrice = styled.div`
   font-weight: 600;
   font-size: 16px;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   padding-left: 10px;
`;
