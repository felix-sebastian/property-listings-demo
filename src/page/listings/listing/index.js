import React from "react";
import styled from "styled-components";
import Header from "./header";
import Address from "./address";

const Box = styled.div`
  width: 14rem;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
  padding: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 9rem;
  margin: 0.5rem 0;
  object-fit: cover;
  object-position: center;
`;

export default ({ street, suburb, state, postcode, status, price, image }) => (
  <Box>
    <Header price={price} status={status} />
    <Image src={image} alt={`${street} ${suburb}`} />
    <Address
      street={street}
      suburb={suburb}
      state={state}
      postcode={postcode}
    />
  </Box>
);
