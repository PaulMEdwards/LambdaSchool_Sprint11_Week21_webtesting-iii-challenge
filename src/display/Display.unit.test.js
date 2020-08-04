import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// jest.mock("Display", ({closed, locked}) => {
//   return {
//     props: {
//       closed: closed,
//       locked: locked
//     }
//   }
// });

test("Display Open Unlocked", async () => {
  const display = rtl.render(<Display locked={false} closed={false} />);
  await display.findByText(/Unlocked/);
  await display.findByText(/Open/);
  expect(display.asFragment()).toMatchSnapshot();

  const leds = document.querySelectorAll(".led");

    const ledLockUnlock = leds[0];
    expect(ledLockUnlock).toHaveClass("green-led");
    expect(ledLockUnlock.textContent).toBe("Unlocked");

    const ledOpenClose  = leds[1];
    expect(ledOpenClose).toHaveClass("green-led");
    expect(ledOpenClose.textContent).toBe("Open");
});

test("Display Open Locked", async () => {
  const display = rtl.render(<Display locked={true} closed={false} />);
  await display.findByText(/Locked/);
  await display.findByText(/Open/);
  expect(display.asFragment()).toMatchSnapshot();

  const leds = document.querySelectorAll(".led");

    const ledLockUnlock = leds[0];
    expect(ledLockUnlock).toHaveClass("red-led");
    expect(ledLockUnlock.textContent).toBe("Locked");

    const ledOpenClose  = leds[1];
    expect(ledOpenClose).toHaveClass("green-led");
    expect(ledOpenClose.textContent).toBe("Open");
});

test("Display Closed Unlocked", async () => {
  const display = rtl.render(<Display locked={false} closed={true} />);
  await display.findByText(/Unlocked/);
  await display.findByText(/Closed/);
  expect(display.asFragment()).toMatchSnapshot();

  const leds = document.querySelectorAll(".led");

    const ledLockUnlock = leds[0];
    expect(ledLockUnlock).toHaveClass("green-led");
    expect(ledLockUnlock.textContent).toBe("Unlocked");

    const ledOpenClose  = leds[1];
    expect(ledOpenClose).toHaveClass("red-led");
    expect(ledOpenClose.textContent).toBe("Closed");
});

test("Display Closed Locked", async () => {
  const display = rtl.render(<Display locked={true} closed={true} />);
  await display.findByText(/Locked/);
  await display.findByText(/Closed/);
  expect(display.asFragment()).toMatchSnapshot();

  const leds = document.querySelectorAll(".led");

    const ledLockUnlock = leds[0];
    expect(ledLockUnlock).toHaveClass("red-led");
    expect(ledLockUnlock.textContent).toBe("Locked");

    const ledOpenClose  = leds[1];
    expect(ledOpenClose).toHaveClass("red-led");
    expect(ledOpenClose.textContent).toBe("Closed");
});