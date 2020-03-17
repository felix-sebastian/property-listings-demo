import React from "react";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
`;

export default ({
  street,
  suburb,
  state,
  postcode
}: {
  street: string;
  suburb: string;
  state: string;
  postcode: string;
}) => (
  <Box>
    {street}
    <br />
    {suburb}
    <br />
    {state} {postcode}
  </Box>
);
