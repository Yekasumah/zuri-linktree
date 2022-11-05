import Footer from "./components/Footer";
 import Profile from "./components/Profile";
 import "./App.css";
 import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
 import { Link } from "react-router-dom";
 import Contact from "./components/Contact";

 const router = createBrowserRouter([
   {
     path: "/",
     element: (
       <div>
         <Profile />
         <Footer />
       </div>
     ),
   },

   {
     path: "/contact",
     element: <Contact />
   }
 ]);



 function App() {
  return <RouterProvider router={router} />;
}

export default App;