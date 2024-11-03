import desktopDevice from "../../../public/imgs/SecondImage.webp";
import movileDevice from "../../../public/imgs/SecondImageSM.webp";
import SectionText from "../SectionText";
import {
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { stories } from "@/constants";
function SecondSection() {
  const item = { ...stories[3] };
  return (
    <Box as="section"  paddingBottom={3}>
      <SectionText
        title="Get better everyday"
        description="
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin."
      >
        <Button
        marginTop={2}
        marginBottom={6}
          color="white"
          bgColor="#C026D3"
          paddingX={{ base: "5", md: "8" }}
          paddingY={7}
          rounded="3xl"
          fontWeight="semibold"
          textStyle={{ base: "md", md: "xl" }}
        >
          Start Now
        </Button>
      </SectionText>
      <Image src={desktopDevice.src} width={"60%"} marginTop={3} margin={"auto"} alt="image_desktop" display={{base:"none",md:"block"}}></Image>
      <Image src={movileDevice.src} width={"60%"}  marginTop={3} margin={"auto"} alt="image_movile" display={{base:"block",md:"none"}}></Image>
    </Box>
  );
}
export default SecondSection;
