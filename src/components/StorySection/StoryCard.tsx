import { StoryProps } from "@/types";
import { Badge, Box, Card, Image, Text } from "@chakra-ui/react";

function StoryCard({ image, title, autor, avatar,isPromoted }: StoryProps) {
  return (
    <Card.Root
      width={"600px"}
      maxWidth={{ base: "300px", md: "266px" }}
      borderColor={"#E2E8F0"}
      height={300}
      rounded={"lg"}
      background={"white"}
      className="shadow"
    >
      <Card.Body position={"relative"}>
        <Image src={image} height={220} rounded={"lg"}></Image>
        {isPromoted?(<Badge bg="#DBEAFE" position={"absolute"} top={2} left={2} color={"blue"} paddingX={2} size={"sm"}>Promoted</Badge>):""}   
      </Card.Body>
      <Card.Footer display={"flex"} padding={3}>
        <Image
          rounded={"full"}
          width={"48px"}
          src={avatar}
          height={"48px"}
          alt={autor}
        ></Image>
        <Box>
          <Text color={"#0F172A"}>{title}</Text>
          <Text color={"#475569"}>{autor}</Text>
        </Box>
      </Card.Footer>
    </Card.Root>
  );
}
export default StoryCard;
