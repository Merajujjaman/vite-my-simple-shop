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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element:<Order></Order>,
        loader: loadCart
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path:'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'proceed',
        element:<Proceed></Proceed>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
