import Layout from "./layout/Layout";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Insurance from "./components/Insurance";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "insurance",
          element: <Insurance />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
