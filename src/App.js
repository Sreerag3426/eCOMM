import './App.css';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route exact path='/' element={<Signup />}  />
     <Route path='/home' element={<Home />} />
     <Route path='/login' element={<Login />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
