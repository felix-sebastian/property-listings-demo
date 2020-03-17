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
  background-color: ${({ color }: { color: string }) => color};
  display: inline-block;
`;

const getColor = (id: string): string => {
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
      return "grey";
  }
};

export default ({ id }: { id: string }) => {
  return (
    <Box>
      <span data-testid="text">{statuses[id] || ""}</span>
      <Dot data-testid="dot" color={getColor(id)} />
    </Box>
  );
};
