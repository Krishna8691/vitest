import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalPage from "../../src/components/Modal";
import Navigation from "../../src/components/Navigation";
import { CounterContext } from "../../src/App";
import { BrowserRouter } from "react-router-dom";

describe("modal page", () => {
  const user = userEvent.setup();

  const renderComponent = () => {
    let counter = 0;
    const increamentCounter = vitest.fn();
    const decreamentCounter = vitest.fn();

    const component = render(
      <>
        <BrowserRouter>
          <Navigation count={counter} />
        </BrowserRouter>
        <CounterContext.Provider
          value={{ increamentCounter, decreamentCounter }}
        >
          <ModalPage />
        </CounterContext.Provider>
      </>
    );

    const openModal = async () => {
      await user.click(component.getByTestId("open-modal"));
      return screen.getByRole("dialog");
    };

    return {
      component,
      openModal,
      increamentCounter,
      decreamentCounter,
    };
  };

  it("open modal button should open the modal", async () => {
    const { openModal } = renderComponent();
    const modal = await openModal();
    expect(modal).toBeInTheDocument();
  });

  it("modal should have buttons that would increament and decrement the counter in nav bar", async () => {
    const { openModal, increamentCounter, decreamentCounter } =
      renderComponent();
    const modal = await openModal();
    const incButton = screen.getByText(/increase counter/i);
    const decButton = screen.getByText(/decrease counter/i);

    await user.click(incButton);
    await user.click(incButton);
    await user.click(decButton);

    const closeButton = screen.getByText(/close/i);
    await user.click(closeButton);

    expect(modal).not.toBeInTheDocument();

    expect(increamentCounter).toHaveBeenCalledTimes(2);
    expect(decreamentCounter).toHaveBeenCalledTimes(1);
    
    // the counter values can also be tested against value change
  });

  // it("on closing the modal the counter value should be updated", async () => {
  //   const currCounterValue = Number(
  //     screen.getByTestId("nav-counter").textContent
  //   );

  //   const diff = prevCounterValue - currCounterValue;
  //   expect(diff).toBe(-1);
  // });
});
