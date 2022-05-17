import React from "react";
import { render } from "@testing-library/react";
import { Counter } from "../../molecules/Counter";
import userEvent from "@testing-library/user-event";
import { App } from "../../../App";

describe("This suit is to test the Body component", () => {
  test("snapshot", () => {
    const asFragment = render(
      <Counter counterTitle={"Learn React"} count={0} />
    ).asFragment();
    expect(asFragment).toMatchSnapshot();
  });

  test("finding titleText", () => {
    const { getByText } = render(
      <Counter counterTitle={"Learn React"} count={0} />
    );
    expect(getByText("Jay Rocks")).toBeInTheDocument();
  });

  test("check Counter value after a tap", () => {
    const { getByTestId } = render(
      <Counter counterTitle={"Learn React"} count={0} />
    );
    const button = getByTestId("button");
    userEvent.click(button);
    userEvent.click(button);
    expect(getByTestId("counter")).toHaveTextContent("2");
  });

  test("App titleText", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/ React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
