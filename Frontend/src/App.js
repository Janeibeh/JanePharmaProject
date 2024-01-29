import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// pages
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Doctors from './Pages/Doctors';
import DoctorDetails from './Pages/DoctorDetails';
import Pharmacy from './Pages/Pharmacy';
import PharmacyDetails from './Pages/PharmacyDetails';
import Appointments from './Pages/Appointments';
import Login from './Pages/Login';
import Signup from './Pages/Signup';



// layout
import Header from './Layout/Header';
import Cart from './Pages/Cart';


//Dashboard
import UserAccount from './Dashboard/user-account/UserAccount';
import Dashboard from './Dashboard/doctor-account/Dashboard';



const router = createBrowserRouter(
createRoutesFromElements(
  <>
    <Route path="/" element={ < Header/> }>
        <Route index element={<Home/>}/>
        <Route path="services" element={<Services/>}/>       
        <Route path='doctors'>
          <Route path="" element={<Doctors/>}/>
          <Route path=":id" element={<DoctorDetails/>}/>
        </Route>
        <Route path='pharmacy'>
          <Route path="" element={<Pharmacy/>}/>
          <Route path=":id" element={<PharmacyDetails/>}/>
        </Route>
  
          <Route path="pharmacy" element={<Pharmacy/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path = "sign" element={<Signup/>}/>
        <Route path = "login" element={<Login/>}/>
        <Route path = "appointments" element={<Appointments/>}/>
        <Route path = "cart" element={<Cart/>}/>
{/* so long as a path is given "" and a component is set as an element to it, just put the path as a url in browser, the component will appear
    These new routes should be stored in Protected Routes */}
        <Route path = "/users/profile/me" element={<UserAccount/>}/>
        <Route path = "/doctors/profile/me" element={<Dashboard/>}/>
    </Route>
  </>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
