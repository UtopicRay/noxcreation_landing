import { Button } from "@chakra-ui/react";
import { IconChevronLeft } from "@tabler/icons-react";

function ButtonLeft(){
    return(
        <Button rounded={"full"} display={{ base: "none", md: "block" }} className="button">
          <IconChevronLeft style={{margin:"auto"}}></IconChevronLeft>
        </Button>
    )
}
export default ButtonLeft;