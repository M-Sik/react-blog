import React from 'react';
import { Outlet } from 'react-router';
import Navigation from '@/components/navigations/Navigation';

function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout;
