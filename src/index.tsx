import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Navigation from "./components/Navigation";
import Static from "./components/Static";
import Form from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <header>
          <Navigation />
        </header>
        <main
          style={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </main>
      </div>
    ),
    children: [
      {
        path: "static",
        element: <Static />,
      },
      {
        path: "form",
        element: <Form />,
      },
      { path: "", element: <Navigate to={"static"} /> },
    ],
  },
] as RouteObject[]);

root.render(<RouterProvider router={routes} />);
