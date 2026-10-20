import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import { Appointments } from "./Pages/Appointments/Appointments";
import { Services } from "./Pages/Services/Services";

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
      {
        path: "/services",
        element: <Services/>
      }
    ],
  },
]);
