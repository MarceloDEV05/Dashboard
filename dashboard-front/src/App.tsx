import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import { Appointments } from "./Pages/Appointments/Appointments";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointments",
        element: <Appointments />,
      },
    ],
  },
]);
