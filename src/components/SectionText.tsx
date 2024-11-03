import { SectionTextProps } from "@/types";
import { Box, Text } from "@chakra-ui/react";

function SectionText({ title, description, children }: SectionTextProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      width="70%"
      margin="auto"
      alignItems="center"
      gapY={2}
    
    >
      <Text className="title" textStyle={{base:"xl",md:"5xl"}}   zIndex={2}>{title}</Text>
      <Text textAlign="center" color="#475569" fontWeight="lighter" zIndex={2}>{description}</Text>
      {children}
    </Box>
  );
}
export default SectionText;
