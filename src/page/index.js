import React from "react";
import styled from "styled-components";
import Filters from "./filters";
import Listings from "./listings";
import usePage from "./usePage";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default () => {
  const { state, properties, status, setStatus } = usePage();
  if (state === "LOADING") return <>Loading</>;
  if (state === "ERROR") return <>Error</>;

  return (
    <Box>
      <Filters status={status} setStatus={setStatus} />
      <Listings items={properties} />
    </Box>
  );
};
