import React from "react";
import { render } from "@testing-library/react";
import Listings from "./";

test("renders correctly", () => {
  expect(
    render(
      <Listings
        items={[
          {
            id: "a",
            price: 0,
            status: "",
            image: "",
            street: "123 Example St",
            suburb: "Melbourne",
            state: "VIC",
            postcode: "3000"
          },
          {
            id: "b",
            price: 0,
            status: "",
            image: "",
            street: "123 Example St",
            suburb: "Melbourne",
            state: "VIC",
            postcode: "3000"
          },
          {
            id: "c",
            price: 0,
            status: "",
            image: "",
            street: "123 Example St",
            suburb: "Melbourne",
            state: "VIC",
            postcode: "3000"
          }
        ]}
      />
    )
  ).toMatchSnapshot();
});
