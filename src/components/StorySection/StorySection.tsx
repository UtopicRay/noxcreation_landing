import { Box, Flex } from "@chakra-ui/react";
import SectionText from "../SectionText";
import styles from "./Story.module.css";
import StoryCard from "./StoryCard";
import { stories } from "@/constants";
import ButtonLeft from "../ButtonLeft";
import ButtonRight from "../ButtonRight";

function StorySection() {
  return (
    <Box as={"section"}>
      <SectionText
        title="Stories from our users"
        description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      ></SectionText>
      <Flex
        justifyContent="center"
        marginTop={12}
        gapX={6}
        alignItems={"center"}
      >
        <ButtonLeft />
        <Box display={{base:"block",md:"flex"}} className={styles.horizontal_scroll}>
          {stories.map((item) => (
            <StoryCard
              key={item.id}
              image={item.image}
              title={item.title}
              avatar={item.avatar}
              autor={item.autor}
            ></StoryCard>
          ))}
        </Box>
        <ButtonRight />
      </Flex>
    </Box>
  );
}
export default StorySection;
