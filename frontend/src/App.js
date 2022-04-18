import React from 'react';
import './App.css';
import axios from 'axios'
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import UserDRFList from './components/Users.js'
import ProjectList from "./components/Projects";
import ToDoList from "./components/ToDos";
import Footer from './components/includes/Footer.js';
import ProjectUser from "./components/Project";
import LoginForm from './components/Auth.js'
import NotFound404 from "./components/includes/NotFound404";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'usersDRF': [],
            'projects': [],
            'todos': [],

            'token': ''
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8001/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8001/api/users/', {headers})
            .then(response => {
                const usersDRF = response.data
                this.setState(
                    {
                        'usersDRF': usersDRF
                    }
                );
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8001/api/projects/', {headers})
            .then(response => {
                const project = response.data.results
                this.setState(
                    {
                        'projects': project
                    }
                );
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8001/api/todo/', {headers})
            .then(response => {
                const todo = response.data.results
                this.setState(
                    {
                        'todos': todo
                    }
                );
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
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

                                    <Nav.Link>
                                        <li>
                                            {this.is_authenticated() ?
                                                <button onClick={() => this.logout()}>Logout</button> :
                                                <Link to='/login'>Login</Link>}
                                        </li>

                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path='/'/>
                        <Route path='/users' element={<UserDRFList usersDRF={this.state.usersDRF}/>}/>

                        <Route path='/projects' element={<ProjectList projects={this.state.projects}/>}/>
                        <Route path="/projects/:id" element={<ProjectUser projects={this.state.projects}/>}/>

                        <Route path='/todos' element={<ToDoList todos={this.state.todos}/>}/>

                        <Route path='/login' element={<LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Route path="*" element={<NotFound404/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default App;
