import { Favourite } from "@/types";
import { Box, GridItem, Text } from "@chakra-ui/react";

function Element({ icon, title, description }: Favourite) {
  return (
    <GridItem textAlign={{ base: "center", md: "left" }} gap={5}>
      <Box display="flex" justifyContent={{base:"center",md:"start"}}>{icon}</Box>
      <Text fontWeight="semibold" marginY={2} color="#21272a">
        {title}
      </Text>
      <Text color="#475569">{description}</Text>
    </GridItem>
  );
}
export default Element;
