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
