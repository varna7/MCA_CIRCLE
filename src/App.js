
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
import Collegeview from './pages/Collegeview/Collegeview';
import College from './pages/College';
import { app } from './firebase-config';
import BasicDetails from './pages/BasicDetails';
import GeneralDetails from './pages/GeneralDetails';
import PostTable from './pages/PostTable';


function App() {
  return (
    <>
    <Router>
      {/* <Topbar/> */}
      <Routes>
        <Route path='/dashboard-college' element={<College/>}/>
        <Route path='/details/basic' element={<BasicDetails/>}/>
        <Route path='/details/general' element={<GeneralDetails/>}/>
        <Route path='/college-post' element={<PostTable/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Newpost' element={<Newpost/>}/>
        <Route path='/Repregister' element={<Repregister/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/College_register' element={<College_register/>}/>
        <Route path='/Verification' element={<Verification/>}/>
        <Route path='/Newpost' element={<Newpost/>}/>
        <Route exact path='/' element={<UserHome/>}/>
        <Route exact path='/Single' element={<Single/>}/>
        <Route exact path='/Collegeview' element={<Collegeview/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
