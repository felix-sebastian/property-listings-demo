import React from "react";
import styled from "styled-components";
import Header from "./header";

const Box = styled.div`
  width: 12rem;
  background-color: #fff;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
  padding: 0.5rem;
`;

export default ({ id, address, status, price, image }) => (
  <Box>
    <Header price={price} status={status} />
  </Box>
);
