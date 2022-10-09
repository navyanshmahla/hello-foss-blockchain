import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import DApp from './Components/dApp';
import Errorpage from './Components/errorpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/dApp" element={<DApp/>}/>
          <Route path ="*" element={<Errorpage/>}/>
        </Routes>
      </Router>
      
      
        
    </div>
  );
}

export default App;
