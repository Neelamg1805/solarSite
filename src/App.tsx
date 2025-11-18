import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigation } from './components/Navigation';
import { ContactSidebar } from './components/ContactSidebar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Safety } from './pages/Safety';
import { Projects } from './pages/Projects';
import { ChannelPartner } from './pages/ChannelPartner';
import { Blog } from './pages/Blog';
import { OpenAccess } from './pages/services/OpenAccess';
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/channel-partner" element={<ChannelPartner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/open-access" element={<OpenAccess />} />
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

