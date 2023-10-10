import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../Components/JobSearch/JobCard";
import Pagination from "../Components/JobSearch/Pagination";
import SeachBar from "../Components/JobSearch/SeachBar";
import TopBar from "../Components/JobSearch/TopBar";
import Loading from "../Components/Loader/Loading";
import { fetchData } from "../Redux/GetJobRedux/GetJobActions";

let id = null;

const JobsSearch = () => {
  const dispatch = useDispatch();
  const { data, loading, page } = useSelector((store) => store.getData);
  const [inputValue, setInputValue] = useState("");

  function fetchDatafun(page, inputValue) {
    clearTimeout(id);
    id = setTimeout(() => {
      dispatch(fetchData({ page, query: inputValue }));
    }, 800);
  }

  useEffect(() => {
    fetchDatafun(page, inputValue);
  }, [page, inputValue]);

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
          <SeachBar inputValue={inputValue} setInputValue={setInputValue} />
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
                "repeat(4, 1fr)",
              ]}
              mx={"auto"}
              gap={8}
              mt={16}
            >
              {data?.map((ele) => (
                <JobCard key={ele.id} items={ele} />
              ))}
            </Grid>
            <Pagination />
          </>
        )}
      </Box>
    </Box>
  );
};

export default JobsSearch;
