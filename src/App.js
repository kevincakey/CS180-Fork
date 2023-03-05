import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from './works';
import Login from './login';
import Navbar from './components/Navbar';
import Home from './home';

import './App.css'
import Layout from './components/Layout/layout';


function App() {
  return (
    <div className="background-blue">
      <Router>
        <Layout>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/works' element={<Works/>} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
  }
    
export default App;



