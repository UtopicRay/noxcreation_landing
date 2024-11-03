import styles from "./HeroSection.module.css";
import hero_section from "../../../public/imgs/hero_image.webp";
import { Box, Button, Image, Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "../ui/field";
import SectionText from "../SectionText";

function HeroSection() {
  return (
    <Box
      margin="auto"
      textAlign="center"
      display="flex"
      flexDirection="column"
      gapY={18}
      paddingX={{ base: "20px", md: "80px" }}
      paddingTop={13}
      paddingBottom="80px"
    >
      <SectionText
        title="It’s time to take a break"
        description="Build your meditation skills with an app that gives you all you need!"
      >
        <Box display="flex" gapX={3} marginTop={1}>
          <Field width={{ base: "52", md: "xl" }}>
            <Input
              rounded="2xl"
              placeholder="Enter your name"
              borderColor="#CBD5E1"
              fontWeight={"400"}
              color={"#475569"}
              paddingX={{base:"3",md:"8"}}
              paddingY={7}
            ></Input>
          </Field>
          <Button 
            color="white"
            bgColor="#C026D3"
            paddingX={{base:"5",md:"8"}}
            paddingY={7}
            rounded="3xl"
            fontWeight="semibold"
            textStyle={{base:"md",md:"xl"}}
          >
            Start Now
          </Button>
        </Box>
      </SectionText>
      <Image
        width={"full"}
        height={{ base: "auto", md: "350px" }}
        className={`${styles.images}`}
        src={hero_section.src}
        alt="image"
      ></Image>
    </Box>
  );
}
export default HeroSection;
