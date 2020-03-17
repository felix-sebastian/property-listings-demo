import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faSync } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  flex-grow: 1;
  padding-top: 3rem;
`;

const Alert = styled.div`
  width: 40rem;
  max-width: 100%;
  max-width: calc(100% - 2rem);
  background-color: crimson;
  border: 1px solid darkred;
  color: #eee;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Refresh = styled(FontAwesomeIcon)`
  float: right;
  opacity: 0.8;
  cursor: pointer;
  margin-left: 2rem;
  transition: opacity 100ms;
  :hover {
    opacity: 1;
  }
`;

export default () => (
  <Box>
    <Alert>
      <div>
        <FontAwesomeIcon icon={faExclamationCircle} /> Uh oh... it looks like
        some things haven't loaded correctly
      </div>
      <div>
        <Refresh icon={faSync} onClick={() => window.location.reload(false)} />
      </div>
    </Alert>
  </Box>
);
