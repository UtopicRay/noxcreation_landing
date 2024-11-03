import { StoryProps } from "@/types";
import {Box, Card, Image, Text } from "@chakra-ui/react";

function StoryCard({ image, title, autor,avatar }: StoryProps) {
  return (
    <Card.Root width={"600px"} maxWidth={{base:"300px",md:"266px"}} borderColor={"#E2E8F0"} height={300} rounded={"lg"} background={"white"} className="shadow">
    <Card.Body>
      <Image src={image}  height={220} rounded={"lg"}></Image>
    </Card.Body>
    <Card.Footer display={"flex"} padding={3}>
      <Image rounded={"full"}  width={"48px"} src={avatar} height={"48px"} alt={autor}></Image>
      <Box>
        <Text color={"#0F172A"}>{title}</Text>
        <Text color={"#475569"}>{autor}</Text>
      </Box>
    </Card.Footer>
  </Card.Root>
  );
}
export default StoryCard;
