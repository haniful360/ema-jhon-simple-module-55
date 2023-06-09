import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
// import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Layout/Home';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
