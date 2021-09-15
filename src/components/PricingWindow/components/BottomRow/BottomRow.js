import {
   WrapperBottom,
   List,
   ListElement,
   ChceckIcon,
   Button,
} from "./BottomRow.css";

const BottomRow = () => (
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
export default BottomRow;
