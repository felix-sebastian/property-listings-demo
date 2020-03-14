import React from "react";
import styled from "styled-components";
import Filters from "./filters";
import Listings from "./listings";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

export default () => (
  <Box>
    <Filters />
    <Listings />
  </Box>
);
