import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ApplicationLayout from './Components/ApplicationLayout';
import ZoneApplication from './Components/ZoneApplication';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100">
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
            className="main-content flex-grow-1 px-2"
            style={{ height: '28%' }}
          >
            <Routes>
              <Route path="/students" element={<div>Students Page</div>} />
              <Route path="/application" element={<ApplicationLayout />}>
                <Route index element={<Navigate to="/application/analytics" replace />} />
                <Route path="analytics" element={<div>Analytics Page</div>} />
                <Route path="zone-application" element={<ZoneApplication />} />
                <Route path="application-status" element={<div>Application staatus</div>} />
                <Route path="receipts" element={<div>Receipts</div>} />
              </Route>
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
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;