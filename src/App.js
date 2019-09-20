import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componet/menu';
import Corpo from './componet/body';

class App extends React.Component {
  render(){
    return(
      <div>
        <Menu />
        <Corpo />
      </div>
    );
  }
}

export default App;
