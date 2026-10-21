import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import { Appointments } from "./Pages/Appointments/Appointments";
import { Services } from "./Pages/Services/Services";
import { Clients } from "./Pages/Clients/Clients";

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
      },
      {
        path: "/clients",
        element: <Clients />
      }
    ],
  },
]);
