import React from "react";
import styled from "styled-components";
import Filters from "./filters";
import Listings from "./listings";
import usePage from "./usePage";
import Loading from "./loading";
import Error from "./error";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #777;
`;

export default () => {
  const { state, properties, status, setStatus } = usePage();

  return (
    <Box>
      {state === "LOADING" && <Loading />}
      {state === "ERROR" && <Error />}
      {state === "OK" && (
        <>
          <Filters status={status} setStatus={setStatus} />
          <Listings items={properties} />
        </>
      )}
    </Box>
  );
};
