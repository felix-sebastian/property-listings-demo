import React from "react";
import styled from "styled-components";

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

const Status = ({ color, text }) => (
  <Box>
    <span>{text}</span>
    <Dot color={color} />
  </Box>
);

export default ({ id }) => {
  switch (id) {
    case "current":
      return <Status color={"green"} text={"Current"} />;
    case "off_market":
      return <Status color={"orange"} text={"Off Market"} />;
    case "sold":
      return <Status color={"crimson"} text={"Sold"} />;
    case "withdrawn":
      return <Status color={"orange"} text={"Withdrawn"} />;
    default:
      return null;
  }
};
