"use client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SectionText from "../SectionText";
import { useFetchData } from "@/hook/useFetchData";
import { useEffect } from "react";
import InfoCard from "./InfoCard";
import Loader from "../Loader";

function ExtraSection() {
  const { results, error, isLoading, getPost } = useFetchData();
  useEffect(() => {
    getPost();
  }, []);
  if (error) {
    console.log(error);
  }
  return (
    <Box as={"section"}>
      <SectionText title="Recients Post"></SectionText>
      {isLoading ? (
        <Loader/>
      ) : (
        <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }} gap={4}>
          {results?.map((result) => (
            <GridItem key={result.id}>
              <InfoCard title={result.title} body={result.body}></InfoCard>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}
export default ExtraSection;
