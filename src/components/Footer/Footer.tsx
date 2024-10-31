import {
  Categories,
  Company,
  Products,
  Resources,
  Solutions,
  Support,
} from "@/constants";
import { Box, Grid, Text } from "@chakra-ui/react";
import ListItem from "./ListItem";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

function Footer() {
  return (
    <Box as="footer" display="grid" paddingX="80px" gapX={12}>
      <Grid templateColumns="repeat(6, 1fr)" margin="auto" width="100%" paddingY="48px" borderBottom="1px solid #E2E8F0">
        <ListItem title="Categories" List={Categories}></ListItem>
        <ListItem title="Products" List={Products}></ListItem>
        <ListItem title="Solutions" List={Solutions}></ListItem>
        <ListItem title="Resources" List={Resources}></ListItem>
        <ListItem title="Support" List={Support}></ListItem>
        <ListItem title="Company" List={Company}></ListItem>
      </Grid>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyItems="center" alignItems="center" gap="2">
          <Text textStyle="xl" fontWeight="bold" style={{ color: "black" }}>
            break<span style={{ color: "#C026D3" }}>io</span>
          </Text>
          <Text style={{ color: "#475569" }}>@ 2023 - All rights reserved</Text>
        </Box>
        <Box style={{ color: "#475569" }} display="flex" gapX="2" paddingY="24px">
          <IconBrandYoutubeFilled></IconBrandYoutubeFilled>
          <IconBrandFacebookFilled></IconBrandFacebookFilled>
          <IconBrandTwitterFilled></IconBrandTwitterFilled>
          <IconBrandInstagram></IconBrandInstagram>
          <IconBrandLinkedin></IconBrandLinkedin>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
