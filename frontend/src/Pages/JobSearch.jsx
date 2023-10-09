import { Box, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../Components/JobSearch/JobCard";
import SeachBar from "../Components/JobSearch/SeachBar";
import TopBar from "../Components/JobSearch/TopBar";
import Pagination from "../Components/JobSearch/Pagination";
import Loading from "../Components/Loader/Loading";

const JobsSearch = () => {
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getJobsData = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8080/jobs?_limit=9&_page=${page}`
      );
      setJobData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePage = (value) => {
    setPage(page + value);
  };

  useEffect(() => {
    getJobsData(page);
  }, [page]);

  return (
    <Box bgColor={"#eaf6f6"} minH={"100vh"}>
      <TopBar />
      <Box px={{ base: "1.5rem", sm: "4rem", md: "4rem", lg: "8rem" }}>
        <Flex
          bgColor={"white"}
          border={"1xp solid red"}
          mx={"auto"}
          py={"2rem"}
          mt={"-2.2rem"}
          borderRadius={"0.5rem"}
          justify={"center"}
          align={"center"}
        >
          <SeachBar />
        </Flex>

        {loading ? (
          <Loading />
        ) : (
          <>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)"
              ]}
              mx={"auto"}
              gap={8}
              mt={16}
            >
              {jobData?.map((ele) => (
                <JobCard key={ele.id} items={ele} />
              ))}
            </Grid>
            <Pagination handlePage={handlePage} page={page} />{" "}
          </>
        )}
      </Box>
    </Box>
  );
};

export default JobsSearch;
