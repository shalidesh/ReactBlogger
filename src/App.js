import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import { Routes, Route, Link } from "react-router-dom";

function App() {
    const currentUser = true;
  return (
    <div>
      
      <TopBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={currentUser? <Write/>: <Register/>} />
        <Route path="/register" element={currentUser? <Home/> :<Register/>} />
        <Route path="/login" element={currentUser? <Home/>:<Login/>} />
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/settings" element={currentUser? <Settings/>: <Login/>} />
        
      </Routes>
   

    </div>
    

  );
}

export default App;
