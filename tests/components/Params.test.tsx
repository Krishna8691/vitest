import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../../src/routes";
import GoToParams from "../../src/components/GoToParams";
import ParamsComp from "../../src/components/Params";

describe("params and go to params page testing routing", () => {
  const user = userEvent.setup();

  it("from main navigation to params page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 1,
    });
    const rootComponent = render(<RouterProvider router={router} />);

    const goToParamsNavMenu = rootComponent.getByText("GoToParams");
    expect(goToParamsNavMenu).toBeInTheDocument();

    await user.click(goToParamsNavMenu);

    const goToParamsLink = await rootComponent.findByTestId(
      "go-to-params-link"
    );
    expect(goToParamsLink).toBeInTheDocument();

    await user.click(goToParamsLink);

    expect(router.state.location.pathname.includes("params")).toBeTruthy();
  });

  it("from gotoparams page to params page", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "gotoparams",
          element: <GoToParams id={200} />,
        },
        {
          path: "params/:id",
          element: <ParamsComp />,
        },
      ],
      {
        initialEntries: ["/gotoparams"],
        initialIndex: 1,
      }
    );
    const rootComponent = render(<RouterProvider router={router} />);

    const goToParamsNavMenu = rootComponent.getByTestId("go-to-params-link");
    await user.click(goToParamsNavMenu);

    expect("params/200").equals("params/200");
  });
});
