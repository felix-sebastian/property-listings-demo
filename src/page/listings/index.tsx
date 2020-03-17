import React from "react";
import styled from "styled-components";
import Listing from "./listing";
import Grid from "./grid";
import { pick } from "lodash";

const Box = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
`;

interface Item {
  id: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  status: string;
  price: number;
  image: string;
}

export default ({ items }: { items: Item[] }) => (
  <Box>
    <Grid>
      {items.map((item: Item) => (
        <Listing
          key={item.id}
          {...pick(item, [
            "street",
            "suburb",
            "state",
            "postcode",
            "status",
            "price",
            "image"
          ])}
        />
      ))}
    </Grid>
  </Box>
);
