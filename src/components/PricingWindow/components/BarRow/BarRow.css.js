import styled from "styled-components";
export const Row = styled.div`
   display: flex;
   flex-basis: 100%;
`;
export const BarWrapper = styled(Row)`
   padding: 25px 50px;
`;
export const Bar = styled.div`
   position: relative;
   flex-basis: 100%;
   display: flex;
   border-radius: 10px;
   height: 10px;
   background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
`;
export const GreenBar = styled.div`
   background-color: ${({ theme }) => theme.colors.primary.softCyan};
   border-radius: 10px;
   width: 0px;
`;
export const Handle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 9px;
   height: 40px;
   width: 40px;
   position: absolute;
   top: 50%;
   left: 0px;
   transform: translate(-50%, -50%);
   background-color: ${({ theme }) => theme.colors.primary.strongCyan};
   border-radius: 50%;
   color: white;
   cursor: pointer;
   box-shadow: 0 10px 30px ${({ theme }) => theme.colors.primary.strongCyan};
   user-select: none;
`;
export const RightArrow = styled.div`
   width: 0;
   height: 0;
   border-top: 6px solid transparent;
   border-bottom: 6px solid transparent;
   border-left: 6px solid rgba(255, 255, 255, 0.6);
`;
export const LeftArrow = styled(RightArrow)`
   transform: scale(-1);
`;
