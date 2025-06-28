import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ApplicationLayout from './Components/ApplicationLayout';
import ZoneApplication from './Components/ZoneApplication';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ height: '100vh' }}>
        {/* Header */}
        <header className="header">
          <Header />
        </header>

        {/* Body */}
        <div className="d-flex flex-grow-1" style={{ background: '#F6F8F9' }}>
          {/* Left Sidebar */}
          <aside className="sidebar" style={{ width: '15vw', background: '#FFF' }}>
            <Sidebar />
          </aside>

          {/* Main content */}
          <main
            className="main-content d-flex flex-column px-2"
            style={{ flexGrow: 1, height: '92vh' }}
          >
            <div
              className="first-section"
            
            >
              <Routes>
                <Route path="/students" element={<div>Students Page</div>} />
                <Route path="/application/*" element={<ApplicationLayout />} />
                <Route path="/employee" element={<div>Employee Page</div>} />
                <Route path="/fleet" element={<div>Fleet Page</div>} />
                <Route path="/warehouse" element={<div>Warehouse Page</div>} />
                <Route path="/sms" element={<div>SMS Page</div>} />
                <Route path="/question-bank" element={<div>Question Bank Page</div>} />
                <Route path="/assets-management" element={<div>Assets Management Page</div>} />
                <Route path="/payment-services" element={<div>Payment Services Page</div>} />
                <Route path="/cctv" element={<div>CCTV Page</div>} />
                <Route path="/hrms" element={<div>HRMS Page</div>} />
                <Route path="/" element={<div></div>} /> {/* Default route */}
              </Routes>
            </div>
            <div
              className="second-section flex-grow-1"
              style={{ minHeight: '0', background: '#F6F8F9' }} // Remaining height
            >
              <Routes>
                <Route path="/application/*" element={<Outlet />}>
                  <Route path="analytics" element={<div>Analytics Page</div>} />
                  <Route path="zone-application" element={<ZoneApplication />} />
                  <Route path="application-status" element={<div>Application Status</div>} />
                  <Route path="receipts" element={<div>Receipts</div>} />
                </Route>
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;