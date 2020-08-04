import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

test("Controls Unlocked Open", async () => {
  const controls = rtl.render(<Controls locked={false} closed={false} />);
  await controls.findByText(/Lock Gate/);
  await controls.findByText(/Close Gate/);
  expect(controls.asFragment()).toMatchSnapshot();

  const buttons = document.querySelectorAll(".toggle-btn");
  expect(buttons).toHaveLength(2);

    const controlLockUnlock = buttons[0];
    expect(controlLockUnlock).not.toBeEnabled();
    expect(controlLockUnlock.textContent).toBe("Lock Gate");

    const controlOpenClose  = buttons[1];
    expect(controlOpenClose).toBeEnabled();
    expect(controlOpenClose.textContent).toBe("Close Gate");
});

test("Controls Unlocked Closed", async () => {
  const controls = rtl.render(<Controls locked={false} closed={true} />);
  await controls.findByText(/Lock Gate/);
  await controls.findByText(/Open Gate/);
  expect(controls.asFragment()).toMatchSnapshot();

  const buttons = document.querySelectorAll(".toggle-btn");
  expect(buttons).toHaveLength(2);

    const controlLockUnlock = buttons[0];
    expect(controlLockUnlock).toBeEnabled();
    expect(controlLockUnlock.textContent).toBe("Lock Gate");

    const controlOpenClose  = buttons[1];
    expect(controlOpenClose).toBeEnabled();
    expect(controlOpenClose.textContent).toBe("Open Gate");
});

test("Controls Locked Open", async () => {
  const controls = rtl.render(<Controls locked={true} closed={false} />);
  await controls.findByText(/Unlock Gate/);
  await controls.findByText(/Close Gate/);
  expect(controls.asFragment()).toMatchSnapshot();

  const buttons = document.querySelectorAll(".toggle-btn");
  expect(buttons).toHaveLength(2);

    const controlLockUnlock = buttons[0];
    expect(controlLockUnlock).not.toBeEnabled();
    expect(controlLockUnlock.textContent).toBe("Unlock Gate");

    const controlOpenClose  = buttons[1];
    expect(controlOpenClose).not.toBeEnabled();
    expect(controlOpenClose.textContent).toBe("Close Gate");
});

test("Controls Unlocked Closed", async () => {
  const controls = rtl.render(<Controls locked={false} closed={true} />);
  await controls.findByText(/Lock Gate/);
  await controls.findByText(/Open Gate/);
  expect(controls.asFragment()).toMatchSnapshot();

  const buttons = document.querySelectorAll(".toggle-btn");
  expect(buttons).toHaveLength(2);

    const controlLockUnlock = buttons[0];
    expect(controlLockUnlock).toBeEnabled();
    expect(controlLockUnlock.textContent).toBe("Lock Gate");

    const controlOpenClose  = buttons[1];
    expect(controlOpenClose).toBeEnabled();
    expect(controlOpenClose.textContent).toBe("Open Gate");
});