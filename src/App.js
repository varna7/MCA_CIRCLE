
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import College_register from './pages/college_Registration/College_register';
import Verification from './pages/college_verification/Verification';
import Newpost from './pages/newpost/Newpost';
import Repregister from './pages/Rep_registration/Repregister';
import UserHome from './pages/userhome/UserHome';
import Single from './pages/single/Single';
import { BrowserRouter as Router,Routes,Route,link } from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Newpost' element={<Newpost/>}/>
        <Route path='/Repregister' element={<Repregister/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/College_register' element={<College_register/>}/>
        <Route path='/Verification' element={<Verification/>}/>
        <Route exact path='/' element={<UserHome/>}/>
        <Route exact path='/Single' element={<Single/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
