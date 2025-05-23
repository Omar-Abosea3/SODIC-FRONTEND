import React, { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './componants/Navbar/Layout/Layout';
import Home from './componants/Home/Home';
import Notfound from './componants/NotFound/NotFound';
import Contactus from './componants/ContactUs/Contactus';
import Aboutus from './componants/Aboutus/Aboutus';
import Loadingscreen from './componants/Loadingscreen/Loadingscreen';
import ItemDetails from './componants/ItemDetails/ItemDetails';
import { Toaster } from 'react-hot-toast';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration (can be replaced with real data fetching logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "contactus", element: <Contactus /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "loadingscreen", element: <Loadingscreen /> },
        { path: "units/:id", element: <ItemDetails /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  // Render the loading screen before the router loads
  if (loading) {
    return <Loadingscreen />;
  }

  return <>
  <Toaster position="top-center" />
    <RouterProvider router={router} />
  </>;
}

export default App;
