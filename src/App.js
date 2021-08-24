import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import UserInfo from './components/UserInfo';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h4>ReactJS Demo<img height="35" src={logo} style={{verticalAlign:'sub'}} /></h4>
          <UserInfo />
        <hr/>
          <AddUser />
          <Users />
      </div>
    )
  }
}

export default App;