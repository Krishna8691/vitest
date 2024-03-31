import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../../src/components/Form";

describe("Form page", () => {
  const user = userEvent.setup();

  it("username field validation states", async () => {
    let component = render(<Form />);
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
  });

  it("color field validation states", async () => {
    let component = render(<Form />);
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
      // expecting the validation to be unsuccessful after clearing the color
      await user.clear(colorInput);
      const invalidFeeback = component.getByTestId("invalid-feedback-color");
      expect(invalidFeeback).toBeInTheDocument();
    }
  });

  it("enable submit button when all fields are validated", async () => {
    const component = render(<Form />);
    // const inputElements = component.getAllByTestId(/(-field)$/g);

    // inputElements.forEach(async (element) => {
    //   await user.type(element, "somevalue");
    // });
    // console.log('---- ', inputElements[0].nodeValue);
    

    const usernameInput = component.getByTestId("username-field");
    await user.type(usernameInput, "somevalue");
    console.log('======= ', usernameInput.nodeValue);

    const checkbox = component.getByTestId("agreement-checkbox");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    const submitButton = component.getByLabelText('submit');
    expect(submitButton).toBeEnabled();
  });

  // it("color field validated when it has value", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });

  // it("color field invalidated when it doesn't have value", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });

  // it("submit button is disabled when form fields are empty and invalidated", () => {
  //   const component = render(<Welcome userName={"Krishna"} />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/krishna/i);
  // });

  // it("submit button is enabled when form fields are filled and validated", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });

  // it("submit button is disabled when username field is invalidated", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });

  // it("submit button is disabled when color field is invalidated", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });

  // it("submit button is disabled when checkbox is unchecked", () => {
  //   const component = render(<Welcome />);
  //   const welcomeElement = component.getByTestId("welcome");
  //   expect(welcomeElement).toHaveTextContent(/guest user/i);
  // });
});
