import { render } from "@testing-library/react";
import Welcome from "../../src/components/Welcome";

describe("static page", () => {
  it("show welcome with username if username is passed as prop", () => {
    const component = render(<Welcome userName={"Krishna"} />);
    const welcomeElement = component.getByTestId("welcome");
    // check if welcome message comes up on static page
    expect(welcomeElement).toHaveTextContent(/krishna/i);
  });

  it("show welcome guest user if username is not passed", () => {
    const component = render(<Welcome />);
    const welcomeElement = component.getByTestId("welcome");
    // check if welcome message comes up on static page as guest user
    expect(welcomeElement).toHaveTextContent(/guest user/i);
  });
});
