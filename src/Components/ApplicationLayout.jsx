import React from 'react';
import { Outlet } from 'react-router-dom';
import ApplicationModule from './ApplicationModule';

const ApplicationLayout = () => {
  return (
    <div className="d-flex flex-column" style={{ height: '100%' }}>
      {/* Render ApplicationModule (header, search bar, navigation) */}
      <ApplicationModule />
      {/* Render sub-route content below */}
      <div style={{ flexGrow: 1, padding: '16px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ApplicationLayout;