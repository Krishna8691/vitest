import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={createBrowserRouter(routes)} />);
