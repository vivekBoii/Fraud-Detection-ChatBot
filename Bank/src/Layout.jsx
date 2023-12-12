import React from 'react';
import { Outlet } from 'react-router-dom';
import SimpleNavbar from './Component/Navbar';

const Layout = () => {
  return (
    <>
        <SimpleNavbar/>
        <Outlet/>
    </>
  )
}

export default Layout;