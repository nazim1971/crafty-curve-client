import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Navber/Home";
import ArtCarft from "../Components/Navber/ArtCarft";
import AddCarftItem from "../Components/Navber/AddCarftItem";
import MyCarftList from "../Components/Navber/MyCarftList";
import About from "../Components/Navber/About";
import Login from "../Components/SignIn/Login";
import Register from "../Components/SignIn/Register";
import Private from "../PrivateRoute/Private";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import Error from "../Root/Error";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
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
        element: <Private><About/></Private>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/viewDetails',
        element: <Private><ViewDetails/></Private>
      }
      ]
    },
  ]);

export default routes;