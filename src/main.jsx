import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Shop/Shop';
import Order from './components/Order/Order';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import loadCart from './components/Loader/Loader';
import Proceed from './components/Proceed/Proceed';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRout from './Routs/PrivateRout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: loadCart
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: 'inventory',
        element: <PrivateRout><Inventory></Inventory></PrivateRout>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'proceed',
        element: <PrivateRout><Proceed></Proceed></PrivateRout>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
