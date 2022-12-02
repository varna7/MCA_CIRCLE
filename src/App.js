
import Topbar from './components/topbar/Topbar'

import Login from './pages/login/Login';
import College_register from './pages/college_Registration/College_register';
import Verification from './pages/college_verification/Verification';
import Newpost from './pages/newpost/Newpost';

import UserHome from './pages/userhome/UserHome';
import Single from './pages/single/Single';
import { BrowserRouter as Router,Routes,Route,link } from 'react-router-dom';
import Collegeview from './pages/Collegeview/Collegeview';
import College from './pages/College';
import BasicDetails from './pages/BasicDetails';
import GeneralDetails from './pages/GeneralDetails';
import PostTable from './pages/PostTable';
import Photos from './pages/Photots';
import AdminDashboard from './pages/AdminDashboard';
import AdminCollegeView from './pages/AdminCollegeView';
import AdminCollegeReq from './pages/AdminCollegeReq';
import ViewAllColleges from './pages/ViewAllColleges';


function App() {


  const userType = window.localStorage.getItem("type");

  return (
    <>
    <Router>
      {/* <Topbar/> */}
      <Routes>
        <Route path='/dashboard-college' element={<College/>}/>
        <Route path='/details/basic' element={<BasicDetails/>}/>
        <Route path='/details/general' element={<GeneralDetails/>}/>
        <Route path='/details/photos' element={<Photos/>}/>
        <Route path='/college-post' element={<PostTable/>}/>
        
   
      
    <Route path='/dashboard-admin' element={ userType=="admin"?<AdminDashboard/>:"Not Allowed"}/>
    <Route path='/admin-colleges/view' element={ userType=="admin"? <AdminCollegeView/>:"Not Allowed"}/>
    <Route path='/admin-colleges/requests' element={ userType=="admin"? <AdminCollegeReq/>:"Not Allowed"}/>


   

        <Route path='/Newpost' element={<Newpost/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/College_register' element={<College_register/>}/>
        <Route path='/verification' element={<Verification/>}/>
        {/* <Route path='/Newpost' element={<Newpost/>}/> */}
        <Route exact path='/' element={<UserHome/>}/>
        <Route exact path='/Single/:id' element={<Single/>}/>
        <Route exact path='/Collegeview/:id' element={<Collegeview/>}/>
        <Route exact path='/all-colleges/' element={<ViewAllColleges/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
