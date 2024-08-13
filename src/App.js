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
import Pannertikka from './components/pannertikka';
import Biriyani from './components/biriyani';
import Thandai from './components/thandai';
import Soba from './components/soba';
import Donburi from './components/donburi';
import Dorayaki from './components/dorayaki';
import Hargow from './components/hargow';
import Kungpaochicken from './components/kungpaochicken';
import Jasmintea from './components/jasmintea';
import Arancini from './components/arancini';
import BranzinnoalForno from './components/branzinnoalforno';
import Tiramisu from './components/tiramisu';
import Tteokbokki from './components/tteokbokki';
import DakGalbi from './components/dakgalbi';
import Mochi from './components/mochi';
import AdminLogin from './components/adminlogin';
import Users from './components/users';


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
          <Route path="/pannertikka" element={<Pannertikka />}/>
          <Route path="/biriyani" element={<Biriyani />}/>
          <Route path="/thandai" element={<Thandai />}/>
          <Route path="/soba" element={<Soba />}/>
          <Route path="/donburi" element={<Donburi />}/>
          <Route path="/dorayaki" element={<Dorayaki />}/>
          <Route path="/hargow" element={<Hargow />}/>
          <Route path="/kungpaochicken" element={<Kungpaochicken />}/>
          <Route path="/jasmintea" element={<Jasmintea />}/>
          <Route path="/arancini" element={<Arancini />}/>
          <Route path="/branzinnoalforno" element={<BranzinnoalForno />}/>
          <Route path="/tiramisu" element={<Tiramisu />}/>
          <Route path="/tteokbokki" element={<Tteokbokki />}/>
          <Route path="/dakgalbi" element={<DakGalbi />}/>
          <Route path="/mochi" element={<Mochi />}/>
          <Route path="/request" element={<Request />}/>
          <Route path="/recipedashboard" element={<RecipeDashboard />}/>
          <Route path="/admindashboard" element={<AdminDashboard />}/>
          <Route path="/adminlogin" element={<AdminLogin />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
