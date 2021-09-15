import styled from "styled-components";
export const Row = styled.div`
   display: flex;
   flex-basis: 100%;
`;

export const WrapperBottom = styled(Row)`
   padding: 30px 50px;
   align-self: flex-end;
   flex-grow: 1;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
   font-size: 14px;
`;
export const List = styled.ul`
   padding: 0;
   list-style: none;
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
`;
export const ListElement = styled.li`
   display: flex;
   margin: 15px 0;
   align-items: center;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
`;
export const ChceckIcon = styled.div`
   height: 10px;
   width: 10px;
   margin-right: 15px;
   background: url(/img/icon-check.svg);
   background-repeat: no-repeat;
   background-position: center;
`;
