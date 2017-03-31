import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
// exemple de function asynchrone avec callback
function asyncFunc( callback ) {

  var data ='coucou';

  setTimeout( () => {
    callback(data);
  }, 3000);

}

asyncFunc( (peuetreCoucou) => {
  console.log('peuetreCoucou : ', peuetreCoucou);
});
*/

class MaClasse {

  constructor(p) {
    this.prenom = p;
  }

  getPrenom() {
    return 'le prenom est ' + this.prenom;
  }

}

var monInstance1 = new MaClasse('Daniel');
var monInstance2 = new MaClasse('David');
var monInstance3 = new MaClasse('Fousseni');

console.log(monInstance1.getPrenom());
console.log(monInstance2.getPrenom());
console.log(monInstance3.getPrenom());


class App extends Component {
  constructor(props) {
    super(props);

    fetch('http://swapi.co/api/people')
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(function(data) {
      //console.log(data.results[0].name);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
