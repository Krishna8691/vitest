import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import Static from "./components/Static";
import Form from "./components/Form";
import App from "./App";
import ModalPage from "./components/Modal";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "static",
        element: <Static />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
      { path: "", element: <Navigate to={"static"} /> },
    ],
  },
] as RouteObject[]);

root.render(<RouterProvider router={routes} />);
