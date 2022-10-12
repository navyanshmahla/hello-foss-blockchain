import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import dApp from './Components/dApp';
import Errorpage from './Components/errorpage';
import Safe from './Components/safe';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/DApp" element={<dApp/>}/>
          <Route path ="*" element={<Errorpage/>}/>
          <Route path="/safe" element={<Safe/>}/>
        </Routes>
      </Router>
      
      
        
    </div>
  );
}

export default App;
