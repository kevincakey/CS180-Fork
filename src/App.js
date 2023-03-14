import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavDropdown, Form, Dropdown, Collapse, Col, Row, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Works from './works';
import Login from './login';
import Home from './home';

import './App.css'
import Layout from './components/Layout/layout';


//homepage display class
export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
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
}
