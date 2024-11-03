import topVectorOutline from "../../../public/imgs/TopVector-1.png";
import topVectorFilled from "../../../public/imgs/TopVector-2.png";
import bottomVectorOutline from "../../../public/imgs/BottonVector-1.png";
import bottomVectorFilled from "../../../public/imgs/BottomVector-2.png";
import userImage from "../../../public/imgs/users/userImage-1.jpeg";
import { Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import SectionText from "../SectionText";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ButtonRight from "../ButtonRight";
import ButtonLeft from "../ButtonLeft";

function UserSection() {
  return (
    <Box
      as="section"
      background="#FDF4FF"
      paddingY="80px"
      position={"relative"}
    >
      <Box>
        <Image
          position={"absolute"}
          src={topVectorOutline.src}
          top={0}
          right={0}
          zIndex={1}
          width={{base:"20%",md:"auto"}}
        ></Image>
        <Image
          position={"absolute"}
          src={topVectorFilled.src}
          top={0}
          right={0}
          zIndex={0}
          width={{base:"20%",md:"auto"}}
        ></Image>
        <Image
          position={"absolute"}
          src={bottomVectorFilled.src}
          bottom={0}
          left={0}
          zIndex={1}
          width={{base:"30%",md:"auto"}}
        ></Image>
        <Image
          position={"absolute"}
          src={bottomVectorOutline.src}
          width={{base:"30%",md:"auto"}}
          bottom={0}
          left={0}
          zIndex={0}
        ></Image>
      </Box>
        <SectionText title="What other users say"></SectionText>
      <Flex
        maxWidth={900}
        margin={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ButtonLeft/>
        <Card.Root
          background="white"
          color="#0F172A"
          textAlign={"center"}
          padding={30}
          maxWidth={700}
          borderColor={"white"}
          margin="auto"
          zIndex={2}
          marginTop={"48px"}
        >
          <Card.Header fontWeight={"bold"} textStyle={"3xl"}>
            Placerat feugiat senectus
          </Card.Header>
          <Card.Body marginTop={8} textStyle={"xl"}>
            Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra
            nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse
            commodo ultrices aenean ultricies.
          </Card.Body>
          <Card.Footer
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            marginTop={16}
          >
            <Image
              src={userImage.src}
              rounded={"full"}
              width={20}
              alt="user_image"
            ></Image>
            <Text fontWeight={"semibold"}>Jane Doe</Text>
            <Text textStyle={"sm"} fontWeight={"lighter"}>
              Senior Designer
            </Text>
          </Card.Footer>
        </Card.Root>
       <ButtonRight/>
      </Flex>
    </Box>
  );
}
export default UserSection;
