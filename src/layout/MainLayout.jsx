import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';


const MainLayout = () => {
  return (
    <>
    <Header/>
    
      <Outlet />
    </>
  );
};

export default MainLayout;
