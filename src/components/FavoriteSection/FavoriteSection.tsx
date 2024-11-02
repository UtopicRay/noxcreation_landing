import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionText from "../SectionText";
import Element from "./Element";
import { favourites } from "@/constants";

function FavoriteSection() {
  return (
    <Box as="section" height={{base:"auto",md:"auto"}} padding={{base:"0",md:"80px"}}>
      <SectionText
        title="Your favourite tools"
        description="In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor."
      ></SectionText>
      <Grid 
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        width="80%"
        margin="auto"
        marginTop="48px"
        gap={6}
      >
        {favourites.map((favourite) => (
          <Element
            key={favourite.description}
            description={favourite.description}
            icon={favourite.icon}
            title={favourite.title}
          ></Element>
        ))}
      </Grid>
    </Box>
  );
}
export default FavoriteSection;
