import React from "react";
import styled from "styled-components";
import Listing from "./listing";
import Grid from "./grid";

const Box = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #777;
`;

export default ({ items }) => (
  <Box>
    <Grid>
      {items.map(item => (
        <Listing {...item} />
      ))}
    </Grid>
  </Box>
);
