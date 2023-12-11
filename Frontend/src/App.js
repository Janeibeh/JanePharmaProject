import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// pages
import Home from './Pages/Home';
import Services from './Pages/Services';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Doctors from './Pages/Doctors';
import Pharmacy from './Pages/Pharmacy';


// layout
import Header from './Layout/Header';
import Appointments from './Pages/Appointments';






const router = createBrowserRouter(
createRoutesFromElements(
  <>
    <Route path="/" element={ < Header/> }>
        <Route index element={<Home/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="doctors" element={<Doctors/>}/>
        <Route path="pharmacy" element={<Pharmacy/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path = "login" element={<Signup/>}/>
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
