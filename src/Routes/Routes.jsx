import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Navber/Home";
import AddCarftItem from "../Components/Navber/AddCarftItem";
import MyCarftList from "../Components/Navber/MyCarftList";
import About from "../Components/Navber/About";
import Login from "../Components/SignIn/Login";
import Register from "../Components/SignIn/Register";
import Private from "../PrivateRoute/Private";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import Error from "../Root/Error";
import UpdateData from "../Components/UpdateData/UpdateData";
import AllArtCraft from "../Components/Navber/Homepage/AllArtCraft";
import AllItemViewDetails from "../Components/ViewDetails/AllItemViewDetails";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children:[
        {
          path: '/',
          element: <Home/>,
          loader: ()=> fetch('http://localhost:5000/craftItems')
        },
      {
        path: '/allArtCraft',
        element: <AllArtCraft/>,
        loader: ()=> fetch('http://localhost:5000/item')
      },
      {
        path: '/addItem',
        element: <Private><AddCarftItem/></Private>
      },
      {
        path: '/myCraft',
        element: <Private><MyCarftList/></Private>
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
        path: '/viewDetails/:id',
        element: <Private><ViewDetails/></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/craftItems/${params.id}`)
      },
      {
        path: '/allItemViewDetails/:id',
        element: <Private><AllItemViewDetails/></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path: '/updateData/:id',
        element: <Private><UpdateData/></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/item/${params.id}`)
      }
      ]
    },
  ]);

export default routes;