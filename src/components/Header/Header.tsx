import styles from "./Header.module.css";
import { NavigationLinks } from "@/constants";
import {
  Box,
  Button,
  Flex,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Text,
} from "@chakra-ui/react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      alignItems={{base:"start",md:"center"}}
      paddingY="6"
      paddingX={{ base: "2", md: "10" }}
    >
      <Text textStyle="3xl" fontWeight="bold" style={{ color: "black" }}>
        break<span style={{ color: "#C026D3" }}>io</span>
      </Text>
      <Box
        as="ul"
        display={{ base: "none", md: "flex" }}
        justifyItems="center"
        alignItems="center"
        gap="4"
      >
        {NavigationLinks.map((link) => (
          <li key={link.key} className={styles.li}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
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
      <Box display={{base:"flex",md:"none"}} flexDirection={"column"}>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button size="xl">
              <IconMenu2 color="#C026D3" />
            </Button>
          </MenuTrigger>
          <MenuContent background={"white"}>
            {NavigationLinks.map((link) => (
              <MenuItem color={"black"} margin={4} value={link.link}>
                {link.label}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </Box>
    </Flex>
  );
}
export default Header;
