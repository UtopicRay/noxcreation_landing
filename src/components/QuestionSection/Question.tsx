"use client";

import styles from "./Question.module.css";
import { QuestionProps } from "@/types";
import { Box, Collapsible, Text } from "@chakra-ui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

function Question({ question, answer }: QuestionProps) {
  const [active, setActive] = useState<boolean>(false);
  function handleClick() {
    setActive((prev) => !prev);
  }
  return (
    <Collapsible.Root
      background="white"
      width="80%"
      marginX="auto"
      padding={3}
      rounded="lg"
      className={styles.question}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Text fontWeight="semibold" textStyle="lg"  className="text">{question}</Text>
        <Collapsible.Trigger
          className="text"
          onClick={handleClick}
        >
            {active ? (
              <IconChevronUp></IconChevronUp>
            ) : (
              <IconChevronDown></IconChevronDown>
            )}
        </Collapsible.Trigger>
      </Box>
      <Collapsible.Content>
        <Box
          padding="4"
          borderWidth="1px"
          borderColor="gray"
          background="#F1F5F9"
          className="text"
          rounded="lg"
        >
          {answer}
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
export default Question;
