import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage'; // Adjust the path as needed
import AboutPage from './components/aboutpage';
import LoginSignup from './components/LoginSignup';
import QuichLorraine from './components/quichlorraine';
import Ratatouille from './components/ratatouille';
import Cremebrulee from './components/cremebrulee';
import Request from './components/request';
import RecipeDashboard from './components/recipedashboard';
import AdminDashboard from './components/admindashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/quichlorraine" element={<QuichLorraine />}/>
          <Route path="/ratatouille" element={<Ratatouille />}/>
          <Route path="/cremebrulee" element={<Cremebrulee />}/>
          <Route path="/request" element={<Request />}/>
          <Route path="/recipedashboard" element={<RecipeDashboard />}/>
          <Route path="/admindashboard" element={<AdminDashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
