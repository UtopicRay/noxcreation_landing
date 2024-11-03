import { InfoCardProps } from "@/types";
import { Card } from "@chakra-ui/react";

function InfoCard({ title, body }: InfoCardProps) {
  return (
    <Card.Root rounded={"xl"} padding={3} className="shadow" background={"white"} borderColor={"gray"}>
      <Card.Header  color="#0F172A" fontWeight={"semibold"}>{title}</Card.Header>
      <Card.Description color={'#475569'}>{body}</Card.Description>
    </Card.Root>
  );
}
export default InfoCard;
