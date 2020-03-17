import React from "react";
import { render } from "@testing-library/react";
import Header from "./";

test("renders correctly", () => {
  const result = render(<Header price={0} status={""} />);
  expect(result.getByTestId("price")).toContainHTML("$0");
  expect(result).toMatchSnapshot();
});

test("renders correctly", () => {
  const result = render(<Header price={15000} status={"Current"} />);
  expect(result.getByTestId("price")).toContainHTML("$15,000");
  expect(result).toMatchSnapshot();
});

test("renders correctly", () => {
  const result = render(<Header price={120000000} status={""} />);
  expect(result.getByTestId("price")).toContainHTML("$120,000,000");
  expect(result).toMatchSnapshot();
});
