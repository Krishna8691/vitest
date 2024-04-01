import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../../src/components/Form";

describe("Form page", () => {
  const user = userEvent.setup();

  const renderComponent = () => {
    const component = render(<Form />);
    const submitButton = component.getByLabelText("submit");

    const isSubmitButtonEnabled = () => {
      expect(submitButton).toBeEnabled();
    };

    const isSubmitButtonDisabled = () => {
      expect(submitButton).toBeDisabled();
    };

    return {
      component,
      submitButton,
      isSubmitButtonEnabled,
      isSubmitButtonDisabled,
    };
  };

  it("username field validation along with submit button status", async () => {
    const { component, isSubmitButtonDisabled } = renderComponent();
    const usernameInput = component.getByTestId("username-field");

    {
      // expecting the validation to be unsuccessful initially
      const invalidFeeback = component.getByTestId("invalid-feedback-username");
      expect(invalidFeeback).toBeInTheDocument();
    }

    // expecting the validation to be successful after entering the username
    await user.type(usernameInput, "somevalue");
    const validFeeback = component.getByTestId("valid-feedback-username");
    expect(validFeeback).toBeInTheDocument();

    {
      // expecting the validation to be unsuccessful after clearing the username
      await user.clear(usernameInput);
      const invalidFeeback = component.getByTestId("invalid-feedback-username");
      expect(invalidFeeback).toBeInTheDocument();
    }

    isSubmitButtonDisabled();
  });

  it("color field validation along with submit button status", async () => {
    const { component, isSubmitButtonDisabled } = renderComponent();
    const colorInput = component.getByTestId("color-field");

    {
      // expecting the validation to be unsuccessful initially
      const invalidFeeback = component.getByTestId("invalid-feedback-color");
      expect(invalidFeeback).toBeInTheDocument();
    }

    // expecting the validation to be successful after entering the color
    await user.type(colorInput, "somevalue");
    const validFeeback = component.getByTestId("valid-feedback-color");
    expect(validFeeback).toBeInTheDocument();

    {
      // expecting the validation to be unsuccessful after clearing the color and submit button to be disabled
      await user.clear(colorInput);
      const invalidFeeback = component.getByTestId("invalid-feedback-color");
      expect(invalidFeeback).toBeInTheDocument();
    }

    isSubmitButtonDisabled();
  });

  it("form validation states, submit button enabled, form status, form submission", async () => {
    const { component, isSubmitButtonEnabled, submitButton } =
      renderComponent();

    const inputElements = component.getAllByTestId(/(-field)$/g);
    const fieldTypes = inputElements.map((element) =>
      user.type(element, "somevalue")
    );
    await Promise.all(fieldTypes);

    const usernameInput = component.getByTestId("username-field");
    await user.type(usernameInput, "somevalue");

    const checkbox = component.getByTestId("agreement-checkbox");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    isSubmitButtonEnabled();

    await user.click(submitButton);

    // also expect form status to appear
    const status = component.getByRole("status").textContent;
    expect(status).toBeTruthy();

    // also expect successful form submission
    const alert = await screen.findByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});
