import React from "react";
import styled from "styled-components";
import statuses from "../../../statuses";

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0.25rem;
  background-color: ${({ color }) => color};
  display: inline-block;
`;

const getColor = id => {
  switch (id) {
    case "current":
      return "green";
    case "off_market":
      return "orange";
    case "sold":
      return "crimson";
    case "withdrawn":
      return "orange";
    default:
      return null;
  }
};

export default ({ id }) => {
  return (
    <Box>
      <span>{statuses[id]}</span>
      <Dot color={getColor(id)} />
    </Box>
  );
};
