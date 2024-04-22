import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainRoute from './MainRoute';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import CoffeeDetails from './Components/CoffeeDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffees"),
        element:<Home></Home>
      },
      {
        path: "/createCoffee",
        element: <Create></Create>
      },
      {
        path: "/update/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element:<Update></Update>
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
