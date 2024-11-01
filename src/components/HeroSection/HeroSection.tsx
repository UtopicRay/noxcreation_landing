import styles from "./HeroSection.module.css";
import hero_section from "../../../public/imgs/hero_image.jpeg";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "../ui/field";
import Image from "next/image";
import SectionText from "../SectionText";

function HeroSection() {
  return (
    <Box
      margin="auto"
      textAlign="center"
      display="flex"
      flexDirection="column"
      gapY="80px"
      paddingX={`80px`}
      paddingTop="56px"
      paddingBottom="80px"
    >
      <SectionText
        title="It’s time to take a break"
        description="Build your meditation skills with an app that gives you all you need!"
      >
        <Box display="flex" gapX={3} marginTop={1}>
          <Field width={700}>
            <Input
              rounded="2xl"
              placeholder="Enter your name"
              borderColor="#CBD5E1"
              paddingX="3"
            ></Input>
          </Field>

          <Button
            color="white"
            bgColor="#C026D3"
            padding="3"
            rounded="xl"
            fontWeight="semibold"
          >
            Start Now
          </Button>
        </Box>
      </SectionText>
      <Image className={styles.images} src={hero_section} alt="image"></Image>
    </Box>
  );
}
export default HeroSection;
