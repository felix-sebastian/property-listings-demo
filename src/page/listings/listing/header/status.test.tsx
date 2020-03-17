import React from "react";
import { render } from "@testing-library/react";
import Status from "./status";

test("uses fallbacks when the id is invalid", () => {
  const result = render(<Status id="" />);
  expect(result.getByTestId("text")).toContainHTML("");
  expect(result.getByTestId("dot")).toHaveStyle("background-color: grey;");
  expect(result).toMatchSnapshot();
});

test("renders correctly for id 'current'", () => {
  const result = render(<Status id="current" />);
  expect(result.getByTestId("text")).toContainHTML("Current");
  expect(result.getByTestId("dot")).toHaveStyle("background-color: green;");
  expect(result).toMatchSnapshot();
});

test("renders correctly for id 'off_market'", () => {
  const result = render(<Status id="off_market" />);
  expect(result.getByTestId("text")).toContainHTML("Off Market");
  expect(result.getByTestId("dot")).toHaveStyle("background-color: orange;");
  expect(result).toMatchSnapshot();
});

test("renders correctly for id 'sold'", () => {
  const result = render(<Status id="sold" />);
  expect(result.getByTestId("text")).toContainHTML("Sold");
  expect(result.getByTestId("dot")).toHaveStyle("background-color: crimson;");
  expect(result).toMatchSnapshot();
});

test("renders correctly for id 'withdrawn'", () => {
  const result = render(<Status id="withdrawn" />);
  expect(result.getByTestId("text")).toContainHTML("Withdrawn");
  expect(result.getByTestId("dot")).toHaveStyle("background-color: orange;");
  expect(result).toMatchSnapshot();
});
