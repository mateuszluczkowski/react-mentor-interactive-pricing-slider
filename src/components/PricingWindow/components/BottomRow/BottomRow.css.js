import styled from "styled-components";
export const BottomWrapper = styled.div`
   padding-top: 20px;
   align-self: stretch;
   display: flex;
   flex-basis: 100%;
   justify-content: center;
   align-items: center;
   flex-wrap: no-wrap;
   border-top: ${({ theme }) => theme.colors.neutral.lightGrayishBlue} 1px solid;
   @media (max-width: 768px) {
      order: 5;
      flex-wrap: wrap;
   }
`;
export const List = styled.ul`
   flex-basis: 50%;
   display: flex;
   flex-direction: column;
   padding: 0;
   list-style: none;
   @media (max-width: 768px) {
      flex-basis: 100%;
      justify-items: center;
      align-items: center;
   }
`;
export const ButtonWrapper = styled.div`
   display: flex;
   flex-basis: 50%;
   align-self: stretch;
   align-items: center;
   justify-content: center;
   @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
   }
`;
export const Button = styled.button`
   height: 45px;
   width: 200px;
   background-color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
   border: none;
   border-radius: 25px;
   color: ${({ theme }) => theme.colors.primary.paleBlue};
   font-weight: 600;
   cursor: pointer;
   transition: 0.3s;
   &:hover {
      color: white;
   }
`;
export const ListElement = styled.li`
   display: flex;
   margin: 7px 0;
   align-items: center;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-size: 13px;
   font-weight: 600;
`;
export const ChceckIcon = styled.div`
   height: 10px;
   width: 10px;
   margin-right: 15px;
   background: url(/img/icon-check.svg);
   background-repeat: no-repeat;
   background-position: center;
`;
