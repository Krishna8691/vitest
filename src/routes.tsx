import Static from "./components/Static";
import Form from "./components/Form";
import App from "./App";
import ModalPage from "./components/Modal";
import GoToParams from "./components/GoToParams";
import ParamsComp from "./components/Params";
import { Navigate, RouteObject } from "react-router-dom";

export const routes = [
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
      {
        path: "gotoparams",
        element: <GoToParams id={1000} />,
      },
      {
        path: "params/:id",
        element: <ParamsComp />,
      },
      { path: "", element: <Navigate to={"static"} /> },
    ],
  },
] as RouteObject[];
