import React from "react";
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

test("Render the Dashboard & verify default initial state", async () => {
  const dashboard = rtl.render(<Dashboard />);
  await dashboard.findByText(/Unlocked/);
  await dashboard.findByText(/Open/);
  await dashboard.findByText(/Lock Gate/);
  await dashboard.findByText(/Close Gate/);
  expect(dashboard.asFragment()).toMatchSnapshot();
});

test("Render the Dashboard Unlocked Open & Close Gate", async () => {
  const dashboard = rtl.render(<Dashboard />);

  const buttons = document.querySelectorAll("button.toggle-btn");
    const controlLockUnlock = buttons[0];
    const controlOpenClose  = buttons[1];
  const display = document.querySelector("div.display");
    const leds = display.querySelectorAll("div.led");
      const ledOpenClose  = leds[1];

  await dashboard.findByText(/Unlocked/);
  await dashboard.findByText(/Open/);
  await dashboard.findByText(/Lock Gate/);
  await dashboard.findByText(/Close Gate/);
  expect(dashboard.asFragment()).toMatchSnapshot();
  
  rtl.act(() => {
    rtl.fireEvent.click(controlOpenClose);
  });
  
  expect(controlLockUnlock).toBeEnabled();
  expect(controlOpenClose.textContent).toBe("Open Gate");
  expect(ledOpenClose).toHaveClass("red-led");
  expect(ledOpenClose.textContent).toBe("Closed");
});

test("Render the Dashboard Unlocked Closed & Lock Gate", async () => {
  const dashboard = rtl.render(<Dashboard />);

  const buttons = document.querySelectorAll("button.toggle-btn");
    const controlLockUnlock = buttons[0];
    const controlOpenClose  = buttons[1];
  const display = document.querySelector("div.display");
    const leds = display.querySelectorAll("div.led");
      const ledLockUnlock = leds[0];

  rtl.act(() => {
    rtl.fireEvent.click(controlOpenClose);
  });

  await dashboard.findByText(/Unlocked/);
  await dashboard.findByText(/Closed/);
  await dashboard.findByText(/Lock Gate/);
  await dashboard.findByText(/Open Gate/);
  expect(dashboard.asFragment()).toMatchSnapshot();

  rtl.act(() => {
    rtl.fireEvent.click(controlLockUnlock);
  });

  expect(controlLockUnlock.textContent).toBe("Unlock Gate");
  expect(controlOpenClose).not.toBeEnabled();
  expect(ledLockUnlock).toHaveClass("red-led");
  expect(ledLockUnlock.textContent).toBe("Locked");
});

test("Render the Dashboard Locked Closed & Unlock Gate", async () => {
  const dashboard = rtl.render(<Dashboard />);

  const buttons = document.querySelectorAll("button.toggle-btn");
    const controlLockUnlock = buttons[0];
    const controlOpenClose  = buttons[1];
  const display = document.querySelector("div.display");
    const leds = display.querySelectorAll("div.led");
      const ledLockUnlock = leds[0];

  rtl.act(() => {
    rtl.fireEvent.click(controlOpenClose);
  });
  rtl.act(() => {
    rtl.fireEvent.click(controlLockUnlock);
  });

  await dashboard.findByText(/Locked/);
  await dashboard.findByText(/Closed/);
  await dashboard.findByText(/Unlock Gate/);
  await dashboard.findByText(/Open Gate/);
  expect(dashboard.asFragment()).toMatchSnapshot();

  rtl.act(() => {
    rtl.fireEvent.click(controlLockUnlock);
  });

  expect(controlLockUnlock.textContent).toBe("Lock Gate");
  expect(controlOpenClose).toBeEnabled();
  expect(ledLockUnlock).toHaveClass("green-led");
  expect(ledLockUnlock.textContent).toBe("Unlocked");
});

test("Render the Dashboard Unlocked Closed & Open Gate", async () => {
  const dashboard = rtl.render(<Dashboard />);

  const buttons = document.querySelectorAll("button.toggle-btn");
    const controlLockUnlock = buttons[0];
    const controlOpenClose  = buttons[1];
  const display = document.querySelector("div.display");
    const leds = display.querySelectorAll("div.led");
      const ledOpenClose  = leds[1];

  rtl.act(() => {
    rtl.fireEvent.click(controlOpenClose);
  });

  await dashboard.findByText(/Unlocked/);
  await dashboard.findByText(/Closed/);
  await dashboard.findByText(/Lock Gate/);
  await dashboard.findByText(/Open Gate/);
  expect(dashboard.asFragment()).toMatchSnapshot();

  rtl.act(() => {
    rtl.fireEvent.click(controlOpenClose);
  });
  
  expect(controlLockUnlock).not.toBeEnabled();
  expect(controlOpenClose.textContent).toBe("Close Gate");
  expect(ledOpenClose).toHaveClass("green-led");
  expect(ledOpenClose.textContent).toBe("Open");
});