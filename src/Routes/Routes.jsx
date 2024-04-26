import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Navber/Home";
import ArtCarft from "../Components/Navber/ArtCarft";
import AddCarftItem from "../Components/Navber/AddCarftItem";
import MyCarftList from "../Components/Navber/MyCarftList";
import About from "../Components/Navber/About";
import Login from "../Components/SignIn/Login";
import Register from "../Components/SignIn/Register";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
      {
        path: '/artCraft',
        element: <ArtCarft/>
      },
      {
        path: '/addItem',
        element: <AddCarftItem/>
      },
      {
        path: '/myCraft',
        element: <MyCarftList/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
      ]
    },
  ]);

export default routes;