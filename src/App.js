import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './PersonList';
import axios from 'axios';
class App extends Component {
  state = {
      persons: []
  }
  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({persons:persons})
     })
              
  }
  render() {
    return (
      <div className="App"> 
       <table>
         <tbody>
           {this.state.persons.map((person,i) => <PersonList key = {i} data = {person} />)}
         </tbody>
       </table>
      </div>
    );
  }
}

export default App;
