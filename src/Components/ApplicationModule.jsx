import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import backgroundImage from '../Assets/BG.png';
import './ApplicationModule.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ApplicationModule = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const location = useLocation();
  const filterRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const getActiveLink = (path) => (location.pathname === path ? 'active' : '');

  // Close filter on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFiltersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="d-flex flex-column position-relative"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90%',
      }}
    >
      {/* Background overlay when filters are open */}
      {filtersOpen && (
        <div
          className="overlay-blur"
          style={{
            position: 'fixed',
            top: '8vh',
            left: '15vw',
            width: '85vw',
            height: '92vh',
            background: '#0000004D', // Semi-transparent black
            zIndex: 5, // Below search bar and dropdown
          }}
        />
      )}

      {/* Header */}
      <div className="px-3 pt-2 pb-1" style={{ flexShrink: 0, zIndex: 6 }}>
        <div style={{ fontSize: '36px', fontWeight: 700, color: '#252C32' }}>
          Application Module
        </div>
        <div style={{ color: '#6E7C87', fontSize: '16px', fontWeight: 400 }}>
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </div>
      </div>

      <div className="d-flex flex-column flex-grow-1 position-relative" style={{ zIndex: 6 }}>
        {/* Search Bar */}
        <div className="px-3 mb-2" style={{ flexShrink: 0, zIndex: 10 }}>
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
              zIndex: 10, // Ensure it stays above the overlay
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
              onFocus={() => setFiltersOpen(true)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                fontWeight: 400,
                backgroundColor: 'transparent',
                width: '100%',
                color: '#000000',
              }}
            />
          </Box>
        </div>

        {/* Filter Popout */}
        {filtersOpen && (
          <div className="filter-popout px-3" ref={filterRef} style={{ position: 'absolute', zIndex: 10, width: '100%', top: '40%' }}>
            <div className="filter-box" style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }}>
              <div className="filter-title">Search Options</div>
              <form className="d-flex flex-column gap-3">
                <TextField label="Academic Year" variant="outlined" fullWidth size="small" />
                <TextField label="Surname" variant="outlined" fullWidth size="small" />
                <TextField label="Student Name" variant="outlined" fullWidth size="small" />
                <TextField label="Parent Name" variant="outlined" fullWidth size="small" />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#B0B0B0',
                    borderRadius: '6px',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '14px',
                    width: '45%',
                    marginTop: '12%',
                    marginLeft: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className="px-3" style={{ flexShrink: 0, overflowY: 'auto', zIndex: 6 }}>
          <nav className="custom-nav">
            <Link className={`nav-link ${getActiveLink('/application/analytics')}`} to="/application/analytics">
              Analytics
            </Link>
            <Link
              className={`nav-link ${getActiveLink('/application/zone-application')}`}
              to="/application/zone-application"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Distribute
              <KeyboardArrowDownIcon />
            </Link>
            <Link className={`nav-link ${getActiveLink('/application/application-status')}`} to="/application/application-status">
              Application Status
            </Link>
            <Link className={`nav-link ${getActiveLink('/application/receipts')}`} to="/application/receipts">
              Receipts
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ApplicationModule;