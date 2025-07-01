import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import backgroundImage from '../Assets/BG.png';
import './ApplicationModule.css'; // Import the new CSS file
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ApplicationModule = () => {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    // Add search logic here (e.g., filter data based on searchValue)
  };

  // Determine the active nav link based on the current path
  const getActiveLink = (path) => (location.pathname === path ? 'active' : '');

  return (
    <div
      className="d-flex flex-column"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90%', // Removed maxHeight to match parent height dynamically
      }}
    >
      {/* Header Section */}
      <div className="px-3 pt-2 pb-1" style={{ flexShrink: 0 }}>
        <div style={{ fontSize: '36px', fontWeight: 700, color: '#252C32' }}>
          Application Module
        </div>
        <div style={{ color: '#6E7C87', fontSize: '16px', fontWeight: 400 }}>
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </div>
      </div>

      {/* Content Section */}
      <div className="d-flex flex-column flex-grow-1">
        {/* Search Bar */}
        <div className="px-3 mt-2" style={{ flexShrink: 0 }}>
          <Box
            sx={{
              width: 400,
              backgroundColor: '#FFFFFF',
              height: '5vh',
              borderTopLeftRadius: '7px',
              borderTopRightRadius: '7px',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #EBECEF',
              padding: '0 8px',
            }}
          >
            <InputAdornment position="start" className="ms-2">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
                  stroke="#0A0A0A"
                  strokeWidth="1.41667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.8748 14.8751L11.829 11.8292"
                  stroke="#0A0A0A"
                  strokeWidth="1.41667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </InputAdornment>
            <input
              type="text"
              placeholder="Search with application no"
              value={searchValue}
              onChange={handleSearchChange}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                fontWeight: 400,
                backgroundColor: 'transparent',
                width: '100%',
                color: '#9C9C9C',
              }}
            />
          </Box>
        </div>

        {/* Navigation Bar */}
        <div
          className="px-3 mt-3"
          style={{
            flexShrink: 0,
            overflowY: 'auto',
          }}
        >
          <nav className="custom-nav">
            <Link
              className={`nav-link ${getActiveLink('/application/analytics')}`}
              to="/application/analytics"
            >
              Analytics
            </Link>
            <Link
              className={`nav-link ${getActiveLink('/application/zone-application')}`}
              to="/application/zone-application"
              style={{ display: 'flex', alignItems: 'center' }} 
            >
              Distribute 
              < KeyboardArrowDownIcon /> 
            </Link>
            <Link
              className={`nav-link ${getActiveLink('/application/application-status')}`}
              to="/application/application-status"
            >
              Application Status
            </Link>
            <Link
              className={`nav-link ${getActiveLink('/application/receipts')}`}
              to="/application/receipts"
            >
              Receipts
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModule;