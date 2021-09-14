import styled from "styled-components";

const Row = styled.div`
   display: flex;
   flex-basis: 100%;
`;

export const Window = styled.div`
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   height: 450px;
   width: 600px;
   background-color: ${({ theme }) => theme.colors.neutral.white};
   box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
   align-items: flex-start;
`;

///////TOP
const TopWrapper = styled(Row)`
   padding: 50px 50px 10px;
`;
const PageViews = styled.div`
   display: flex;
   align-items: center;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-weight: 800;
   letter-spacing: 2px;
`;
const Price = styled.div`
   flex-grow: 1;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   font-size: 43px;
   font-weight: 800;
   margin-right: 0;
   color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
`;
const SubPrice = styled.div`
   font-weight: 600;
   font-size: 16px;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   padding-left: 10px;
`;
export const TopRow = () => (
   <TopWrapper>
      <PageViews>100k pageviews</PageViews>
      <Price>
         $16.00<SubPrice>/month</SubPrice>
      </Price>
   </TopWrapper>
);
//////// SliderRow
const SliderRowWrapper = styled(Row)`
   padding: 25px 50px;
`;
const Line = styled.div`
   position: relative;
   flex-basis: 100%;
   display: flex;
   border-radius: 10px;
   height: 10px;
   background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
`;
const GreenLine = styled.div`
   background-color: ${({ theme }) => theme.colors.primary.softCyan};
   flex-basis: ${(props) => props.sliderPosition};
   border-radius: 10px;
`;
const Circle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 9px;
   height: 40px;
   width: 40px;
   position: absolute;
   top: 50%;
   left: ${(props) => props.sliderPosition};
   transform: translate(-50%, -50%);
   background-color: ${({ theme }) => theme.colors.primary.strongCyan};
   border-radius: 50%;
   color: white;
   cursor: pointer;
   box-shadow: 0 10px 30px ${({ theme }) => theme.colors.primary.strongCyan};
`;
const RightArrow = styled.div`
   width: 0;
   height: 0;
   border-top: 6px solid transparent;
   border-bottom: 6px solid transparent;
   border-left: 6px solid rgba(255, 255, 255, 0.6);
`;
const LeftArrow = styled(RightArrow)`
   transform: scale(-1);
`;
export const SliderRow = ({ sliderPosition }) => (
   <SliderRowWrapper>
      <Line>
         <GreenLine sliderPosition={sliderPosition} />
         <Circle sliderPosition={sliderPosition}>
            <LeftArrow />
            <RightArrow />
         </Circle>
      </Line>
   </SliderRowWrapper>
);
///TogglerRow
const WrapperToggler = styled(Row)`
   justify-content: flex-end;
   align-items: center;
   margin-right: 10px;
   padding: 30px 50px;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
   font-weight: 600;
`;
const Toggler = styled.div`
   display: flex;
   align-items: center;
   margin: 0 5px;
   width: 40px;
   height: 22px;
   background-color: ${({ theme }) =>
      theme.colors.neutral.lightGrayishBlueSecond};
   border-radius: 10px;
   padding: 3px;
   cursor: pointer;
`;
const TogglerCircle = styled.div`
   width: 15px;
   height: 15px;
   background-color: white;
   border-radius: 50%;
`;
const Option = styled.div`
   margin: 0 5px;
   font-size: 14px;
`;
const DiscountText = styled.div`
   margin: 0 5px;
   padding: 4px 7px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.colors.primary.lightGrayishRed};
   color: ${({ theme }) => theme.colors.primary.lightRed};
   font-weight: 800;
   font-size: 11px;
`;

export const TogglerRow = () => (
   <WrapperToggler>
      <Option>Monthly Billing</Option>
      <Toggler>
         <TogglerCircle />
      </Toggler>
      <Option>Yearly Billing</Option>
      <DiscountText>25% discount</DiscountText>
   </WrapperToggler>
);

//BottomRow
const WrapperBottom = styled(Row)`
   padding: 30px 50px;
   align-self: flex-end;
   flex-grow: 1;
   justify-content: space-between;
   align-items: center;
   border-top: 1px solid ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
   font-size: 14px;
`;
const List = styled.ul`
   padding: 0;
   list-style: none;
`;
const Button = styled.button`
   height: 45px;
   width: 200px;
   background-color: ${({ theme }) => theme.colors.neutral.darkDesaturatedBlue};
   border: none;
   border-radius: 25px;
   color: ${({ theme }) => theme.colors.primary.paleBlue};

   font-weight: 600;
   cursor: pointer;
`;
const ListElement = styled.li`
   display: flex;
   margin: 15px 0;
   align-items: center;
   color: ${({ theme }) => theme.colors.neutral.grayishBlue};
`;
const ChceckIcon = styled.div`
   height: 10px;
   width: 10px;
   margin-right: 15px;
   background: url(/img/icon-check.svg);
   background-repeat: no-repeat;
   background-position: center;
`;
export const BottomRow = () => (
   <WrapperBottom>
      <List>
         <ListElement>
            <ChceckIcon />
            Unlimited websites
         </ListElement>
         <ListElement>
            <ChceckIcon />
            100% data owership
         </ListElement>
         <ListElement>
            <ChceckIcon />
            Email reports
         </ListElement>
      </List>
      <Button>Start my trial</Button>
   </WrapperBottom>
);
