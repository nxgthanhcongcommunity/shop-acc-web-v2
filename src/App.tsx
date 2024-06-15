import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./conponents";
import {
  Account,
  AccountInfo,
  AccountReceived,
  AccountRecharge,
  Home,
  Login,
  Nomatch,
  Order,
  OrderBasket,
  OrderPayment,
  OrderReceived,
  Product,
  Shop,
} from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "order",
          element: <Order />,
          children: [
            {
              index: true,
              element: <OrderBasket />,
            },
            {
              path: "payment",
              element: <OrderPayment />,
            },
            {
              path: "received",
              element: <OrderReceived />,
            },
          ],
        },
        {
          path: "account",
          element: <Account />,
          children: [
            {
              index: true,
              element: <AccountInfo />,
            },
            {
              path: "recharge",
              element: <AccountRecharge />,
            },
            {
              path: "received",
              element: <AccountReceived />,
            },
          ],
        },
        { path: "*", element: <Nomatch /> },
      ],
    },
  ],
  {
    basename: "/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
