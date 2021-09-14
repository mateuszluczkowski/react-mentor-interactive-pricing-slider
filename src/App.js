import styled from "styled-components";

const TestComponent = styled.div`
   width: 100px;
   height: 100px;
   font-family: ${({ theme }) => theme.font.family};
`;

function App() {
   return <TestComponent>Hello!</TestComponent>;
}

export default App;
