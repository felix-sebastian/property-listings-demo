import React from "react";
import { render } from "@testing-library/react";
import Page from "./";
import usePage from "./usePage";

jest.mock("./usePage", () =>
  jest.fn().mockReturnValue({
    state: "LOADING",
    properties: [],
    status: null,
    setStatus: jest.fn()
  })
);

test("renders loading state", () => {
  expect(render(<Page />)).toMatchSnapshot();
});

test("renders ok state", () => {
  (usePage as jest.Mock).mockReturnValueOnce({
    state: "OK",
    properties: [{ id: 1, foo: "bar" }],
    status: null,
    setStatus: jest.fn()
  });

  expect(render(<Page />)).toMatchSnapshot();
});

test("renders error state", () => {
  (usePage as jest.Mock).mockReturnValueOnce({
    state: "ERROR",
    properties: [],
    status: null,
    setStatus: jest.fn()
  });

  expect(render(<Page />)).toMatchSnapshot();
});
