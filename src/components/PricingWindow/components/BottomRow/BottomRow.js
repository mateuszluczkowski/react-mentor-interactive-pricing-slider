import {
   BottomWrapper,
   ButtonWrapper,
   List,
   ListElement,
   ChceckIcon,
   Button,
} from "./BottomRow.css";

const BottomRow = () => (
   <BottomWrapper>
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
      <ButtonWrapper>
         <Button>Start my trial</Button>
      </ButtonWrapper>
   </BottomWrapper>
);
export default BottomRow;
