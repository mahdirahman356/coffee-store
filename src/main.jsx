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
import Login from './Components/Login';
import SingUp from './Components/SingUp';
import Context from './Context/Context';
import Users from './Components/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/coffees"),
        element: <Home></Home>
      },
      {
        path: "/createCoffee",
        element: <Create></Create>
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <Update></Update>
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:5000/users"),
        element:<Users></Users>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
