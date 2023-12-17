
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header  from './components/commen/Header';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound'; 
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} /> {/* Handle 404 pages */}
      </Routes>
    </Router>
  );
}

export default App;
