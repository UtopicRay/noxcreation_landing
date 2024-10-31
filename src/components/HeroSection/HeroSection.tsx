import styles from "./HeroSection.module.css";
import hero_section from "../../../public/imgs/hero_image.jpeg";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "../ui/field";
import Image from "next/image";

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
      <Box display="flex" gap="24px" flexDirection="column">
        <Text className="title">It’s time to take a break</Text>
        <Text color="#475569" fontWeight="lighter">
          Build your meditation skills with an app that gives you all you need!
        </Text>
        <Box display="flex" gap="8" margin="auto">
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
      </Box>
      <Image className={styles.images} src={hero_section} alt="image"></Image>
    </Box>
  );
}
export default HeroSection;
