import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './componet/menu';
import Corpo from './componet/body';
import Pokemon from './componet/pokemon';

class App extends React.Component {
  render(){
    return(
      <div>
        <Menu />
        <Corpo />
        <Pokemon />
      </div>
    );
  }
}

export default App;
