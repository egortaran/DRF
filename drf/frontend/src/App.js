import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDRFList from './components/Authapp.js'
import axios from 'axios'

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
               <UserDRFList usersDRF={this.state.usersDRF} />
           </div>
       )
   }
}

export default App;
