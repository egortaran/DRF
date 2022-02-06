import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDRFList from './components/Authapp.js'
import axios from 'axios'
import Footer from './components/Footer.js';
import MenuNavbar from './components/MenuNavbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'usersDRF': []
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
   }


   render () {
       return (
           <div>
               <MenuNavbar />
               <UserDRFList usersDRF={this.state.usersDRF} />
               <Footer />
           </div>
       )
   }
}

export default App;
