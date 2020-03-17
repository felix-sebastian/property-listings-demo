import { renderHook, act } from "@testing-library/react-hooks";
import usePage from "./usePage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test("should update status", async () => {
  new MockAdapter(axios).onGet().reply(200, [
    {
      foo: "bar"
    }
  ]);

  // before
  const { result, waitForNextUpdate } = renderHook(() => usePage());
  expect(result.current.state).toStrictEqual("LOADING");
  expect(result.current.properties).toStrictEqual([]);
  await waitForNextUpdate();

  // after request
  expect(result.current.state).toStrictEqual("OK");
  expect(result.current.properties).toStrictEqual([{ foo: "bar" }]);
});

test("should handle errors", async () => {
  new MockAdapter(axios).onGet().networkError();

  // before
  const { result, waitForNextUpdate } = renderHook(() => usePage());
  expect(result.current.state).toStrictEqual("LOADING");
  expect(result.current.properties).toStrictEqual([]);
  await waitForNextUpdate();

  // after request
  expect(result.current.state).toStrictEqual("ERROR");
  expect(result.current.properties).toStrictEqual([]);
});
