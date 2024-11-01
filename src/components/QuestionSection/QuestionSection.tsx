import { Box, Flex } from "@chakra-ui/react";
import SectionText from "../SectionText";
import Question from "./Question";
import { Questions } from "@/constants";

function QuestionSection() {
  return (
    <Box as="section" background="#F1F5F9" paddingY={12}>
      <SectionText
        title="Frequently asked questions"
        description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
      ></SectionText>
      <Flex direction="column" marginTop={10} gapY={4}>
        {Questions.map(question=>(
            <Question key={question.id} question={question.question} answer={question.answer}/>
        ))}
      </Flex>
    </Box>
  );
}
export default QuestionSection;
