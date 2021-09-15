import styled from "styled-components";

const Window = styled.div`
   margin: 0 auto 50px;
   padding: 50px 50px 30px;
   display: flex;
   flex-wrap: wrap;
   height: 450px;
   width: 600px;
   background-color: ${({ theme }) => theme.colors.neutral.white};
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
   align-items: flex-start;
   @media (max-width: 768px) {
      width: 90vw;
      height: 600px;
      padding: 20px 25px 10px;
   }
`;

export default Window;
