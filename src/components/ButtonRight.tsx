import { Button } from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons-react";

function ButtonRight(){
return(
    <Button rounded={"full"} display={{ base: "none", md: "block" }}>
    <IconChevronRight style={{margin:"auto"}} />
  </Button>
);
}
export default ButtonRight;