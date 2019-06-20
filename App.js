import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:null,
    }
    this.getdata();
  }
  getdata(){
    let data=fetch('http://citibikenyc.com/stations/json').then((resp)=>{
      resp.json().then((res)=>{
      console.log(res);
    })
    })
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
