
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./assets/Components/Layout/Layout";
import Cart from "./assets/Components/Cart/Cart";
import Wishlist from "./assets/Components/Wishlist/Wishlist";
import Home from "./assets/Components/Home/Home";
import Products from "./assets/Components/Products/Products";
import Category from "./assets/Components/Category/Category";
import Brand from "./assets/Components/Brand/Brand";
import Login from "./assets/Components/Login/Login";
import Register from "./assets/Components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {path:"/" ,element: <Layout/> ,children:[
      {path:"/", element:<Home/>},
      {path:"/cart", element:<Cart/>},
      {path:"/Wishlist", element:<Wishlist />},
      {path:"/Product", element:<Products />},
      {path:"/Category", element:<Category />},
      {path:"/Brand", element:<Brand />},
      {path:"/Login", element:<Login />},
      {path:"/Register", element:<Register />},
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
