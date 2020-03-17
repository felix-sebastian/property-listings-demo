import React from "react";
import { render } from "@testing-library/react";
import Listing from "./";

test("uses fallbacks when the id is invalid", () => {
  const result = render(
    <Listing
      price={0}
      status={""}
      image=""
      street="123 Example St"
      suburb="Melbourne"
      state="VIC"
      postcode="3000"
    />
  );

  expect(result.getByTestId("image")).toHaveAttribute(
    "alt",
    "123 Example St Melbourne"
  );

  expect(result).toMatchSnapshot();
});
