import React, { Component } from 'react';
import './App.css';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const  sampleEmployee = {
  gender:  'male',
  name: {
        title:  'mr',
        first:  'mathys',
        last:  'aubert'
  },
  location: {
        street:  '9467 rue gasparin',
        city:  'perpignan',
        postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
        medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
  }
  
  getEmployee() {
    // Employee's data via fetch
    fetch("https://randomuser.me/api?nat=fr")
      .then(response  =>  response.json())
      .then(data  => {
        // Once the data are retrieved, we update our state with the new data
        this.setState({
          employee:  data.results[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <GenerateEmployee selectEmployee={() => this.getEmployee()} />
      </div>
    );
  }
}
export default App;