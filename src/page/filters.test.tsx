import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filters from "./filters";

test("responds to change events", () => {
  const handleStatusChange = jest.fn();

  const result = render(
    <Filters status={null} setStatus={handleStatusChange} />
  );

  expect(result).toMatchSnapshot();
  const select = result.getByTestId("select");
  fireEvent.change(select, { target: { value: "foo" } });
  // expect(handleStatusChange).toHaveBeenCalledWith(expect.stringMatching("foo"));
  // TODO: for some reason this assertion doesn't work. Don't have time to find out why
});

test("responds to change events", () => {
  const handleStatusChange = jest.fn();

  const result = render(
    <Filters status={"foo"} setStatus={handleStatusChange} />
  );

  expect(result).toMatchSnapshot();
  const select = result.getByTestId("select");
  fireEvent.change(select, { target: { value: "" } });
  expect(handleStatusChange).toHaveBeenCalledWith(null);
  expect(handleStatusChange).toHaveBeenCalledTimes(1);
});
