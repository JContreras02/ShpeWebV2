//import '.App.css';
import TopPanel from './TopPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Join from './Pages/Join/Join';

function App() {
  return (
    <Router basename ="/ShpeWebV2">
      <TopPanel />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/sponsors" element={<h1>Sponsors Page</h1>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/eboard" element={<h1>E-Board Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;