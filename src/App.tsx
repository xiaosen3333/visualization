import Home from "./pages/Home/home";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import {Frame} from "./pages/Frame/Frame"
import { Industry } from "./pages/Industry/Industry";
function App() {
  return (
    <div style={{minWidth:"100vw",minHeight:"100vh"}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/industry" element={<Industry/>} />
            <Route path="/frame" element={<Frame/>} />
          </Routes>
        </Router>
        </div>
      );
}

export default App;
