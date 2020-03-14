import React from "react";
import styled from "styled-components";
import statuses from "./statuses";

const Box = styled.div`
  padding: 1rem;
  background-color: #313335;
  color: #fff;
`;

const Inner = styled.div`
  margin: 0 auto;
  text-align: right;
  max-width: 14rem;
  @media (min-width: 29rem) {
    max-width: 29rem;
  }
  @media (min-width: 44rem) {
    max-width: 44rem;
  }
  @media (min-width: 59rem) {
    max-width: 59rem;
  }
  @media (min-width: 74rem) {
    max-width: 74rem;
  }
`;

export default ({ status, setStatus }) => (
  <Box>
    <Inner>
      <select
        value={status || ""}
        onChange={event => setStatus(event.target.value || null)}
      >
        <option value="">All</option>
        {Object.entries(statuses).map(([id, text]) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>
    </Inner>
  </Box>
);
