import  { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Foooter/Footer';
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}
