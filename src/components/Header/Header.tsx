import { NavigationLinks } from "@/constants";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  return (
    <header className="">
      <Flex justify="space-between" p="4">
        <h1>breakio</h1>
        <Box>
          <ul>
            {NavigationLinks.map((link) => (
              <li key={link.key}>
                <Link  href={link.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </Box>
      </Flex>
    </header>
  );
}
export default Header;
