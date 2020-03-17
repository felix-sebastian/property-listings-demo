import React from "react";
import { render } from "@testing-library/react";
import Error from "./";

test("renders correctly", () => {
  expect(render(<Error />)).toMatchSnapshot();
});
