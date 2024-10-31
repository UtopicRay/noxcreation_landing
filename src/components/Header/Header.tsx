import { NavigationLinks } from "@/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  return (
    <Flex as="header" justify="space-between" alignItems="center" paddingY="6" paddingX="10">
      <Text textStyle="xl" fontWeight="bold" style={{ color: "black" }}>
        break<span style={{color:"#C026D3"}}>io</span>
      </Text>
      <Box as="ul" display="flex" justifyItems="center" alignItems="center" gap="4">
        {NavigationLinks.map((link) => (
          <li key={link.key}>
            <Link href={link.link} style={{ color: "black" }}>
              {link.label}
            </Link>
          </li>
        ))}
        <Button color="white" bgColor="#C026D3" padding="3" rounded="xl" fontWeight="semibold">Start Now</Button>
      </Box>
    </Flex>
  );
}
export default Header;
