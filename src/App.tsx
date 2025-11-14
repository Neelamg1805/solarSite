import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation } from './components/Navigation';
import { ContactSidebar } from './components/ContactSidebar';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { LoginAs } from './pages/LoginAs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <ContactSidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginAs />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;

