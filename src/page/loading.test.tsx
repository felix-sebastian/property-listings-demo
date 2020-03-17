import React from "react";
import { render } from "@testing-library/react";
import Loading from "./";

test("renders correctly", () => {
  expect(render(<Loading />)).toMatchSnapshot();
});
