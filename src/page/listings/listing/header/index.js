import React from "react";
import styled from "styled-components";
import Status from "./status";
import currencyFormatter from "currency-formatter";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({ price, status }) => (
  <Box>
    <div>{currencyFormatter.format(price, { code: "AUD", precision: 0 })}</div>{" "}
    <Status id={status} />
  </Box>
);
