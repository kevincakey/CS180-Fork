import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Works from './works';
import Login from './login';
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
      <Navbar/>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/works' element={<Works/>} />
      </Routes>
      </Router>
  );
  }
    
export default App;

//homepage display class
// export default class Page extends React.Component {
//   constructor(props){
//     super(props);
//   }


//   render(){
//     return(
//       <div style={{backgroundColor: "#e7f8ff"}}>
//         <Navbarr/>
//         <Routes>
//           <Route path='/works' element={< Works/>} />
//         </Routes>
//        {/* <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e7f8ff"}}>
//           <a class="navbar-brand justify-content-end me-5" href="#" style={{backgroundColor: "#e7f8ff"}}>Fork</a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse me-4" id="navbarSupportedContent">
//             <ul class="navbar-nav ms-auto me-5">
//               <li class="nav-item active">
//                 <a class="nav-link" href="#">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a path='/works' element = {<Works/>} class="nav-link" href="#">How It Works</a> 
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Login</a>
//               </li>
//             </ul>
//           </div>
//         </nav> */}

//         <div class="me-5 main-div body">
//           <h1> Fork Landing Page</h1>
//           <ul>
//             <li> How It Works </li>
//             <li> Login </li>
//           </ul>

//           <img src="phone.jpg" class="resize img-fluid" alt="Responsive image"></img>

//           <div ms-auto>
//             <Button> Login with Venmo </Button>
//           </div>
//         </div>

        

          // <footer class="text-center fixed-bottom" style={{backgroundColor: "#e7f8ff"}}>
          //   Made with ❤️ by Team Blu
          // </footer>

//       </div>
//     );
//   }

// }
