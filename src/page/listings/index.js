import React from "react";
import styled from "styled-components";
import Listing from "./listing";

const Box = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #777;
`;

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }
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
