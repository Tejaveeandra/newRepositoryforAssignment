import React from 'react';
import { Outlet } from 'react-router-dom';
import ApplicationModule from './ApplicationModule';

const ApplicationLayout = () => {
  return (
    <div >
      {/* Render ApplicationModule (header, search bar, navigation) */}
      <ApplicationModule />
      
      <Outlet />
    </div>
  );
};

export default ApplicationLayout;