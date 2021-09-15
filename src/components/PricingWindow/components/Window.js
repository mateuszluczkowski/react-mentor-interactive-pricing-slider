import styled from "styled-components";

const Window = styled.div`
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   height: 450px;
   width: 600px;
   background-color: ${({ theme }) => theme.colors.neutral.white};
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
   align-items: flex-start;
`;

export default Window;
