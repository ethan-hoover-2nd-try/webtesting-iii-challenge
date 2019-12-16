// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);
describe("Control", () => {
  it("it rendered correctly", () => {
    const ctrl = rtl.render(<Controls />);
    expect(ctrl.baseElement).toMatchSnapshot();
  });

  it("it changes to open gate correctly", () => {
    const { getByText, findByText } = render(<Controls />);
    const btnOpen = getByText("Close Gate");
    console.log(expect(btnOpen));
    expect(btnOpen).not.toHaveAttribute("onClick");
    fireEvent.click(btnOpen);
    findByText(/open gate/i);
  });

  it("it changes to unlock gate correctly", () => {
    const { getByText, findByText } = render(<Controls />);
    const btnLock = getByText("Lock Gate");
    expect(btnLock).not.toHaveAttribute("onClick");
    fireEvent.click(btnLock);
    findByText(/unlock gate/i);
  });
});