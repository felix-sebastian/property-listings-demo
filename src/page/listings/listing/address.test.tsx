import React from "react";
import { render } from "@testing-library/react";
import Address from "./address";

test("uses fallbacks when the id is invalid", () => {
  expect(
    render(
      <Address
        street="123 Example St"
        suburb="Melbourne"
        state="VIC"
        postcode="3000"
      />
    )
  ).toMatchSnapshot();
});
