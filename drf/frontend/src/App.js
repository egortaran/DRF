import React from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import UserDRFList from './components/Authapp.js'
import ProjectList from "./components/Projects";
import ToDoList from "./components/ToDos";
import Footer from './components/Footer.js';
import ProjectUser from "./components/ProjectUser";


const
    NotFound404 = ({location}) => {
        return (
            <div>
                <h1>Page '{location.pathname}' Not Found 404</h1>
            </div>
        )
    }

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'usersDRF': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const usersDRF = response.data
                this.setState(
                    {
                        'usersDRF': usersDRF
                    }
                );
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const project = response.data.results
                this.setState(
                    {
                        'projects': project
                    }
                );
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todo = response.data.results
                this.setState(
                    {
                        'todos': todo
                    }
                );
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><Link to='/'>Home </Link></Nav.Link>
                                    <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                                    <Nav.Link><Link to='/projects'>Projects</Link></Nav.Link>
                                    <Nav.Link><Link to='/todos'>ToDo</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path='/'/>
                        <Route path='/users' element={<UserDRFList usersDRF={this.state.usersDRF}/>}/>
                        <Route path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                        <Route path='/todos' element={<ToDoList todos={this.state.todos}/>}/>

                        <Route path="/projects/:id" element={<ProjectUser projects={this.state.projects}/>}/>

                        <Route component={NotFound404}/>

                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;
