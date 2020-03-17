import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: #aaa;
  font-size: 2rem;
  animation: ${spin} 0.8s linear infinite;
`;

export default () => (
  <Box>
    <Icon icon={faCircleNotch} />
  </Box>
);
