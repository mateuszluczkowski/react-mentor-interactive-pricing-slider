import styled from "styled-components";
const Container = styled.div`
   height: 850px;
   width: ${({ theme }) => theme.layout.desktop};
   background-image: url("/img/bg-pattern.svg");
   background-repeat: no-repeat;
   position: relative;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
`;
export default Container;
