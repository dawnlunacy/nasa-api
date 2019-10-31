
import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Classname from './Classname';
// import Funcname from '../Funcname/Funcname';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      key: "value"
    }
  }
  
  method = () => {
    console.log('run something')
  }
  
  render() {
    return (
      <div>
        Return something
      </div>
    )
  }
}

export default App;


// const mapStateToProps = (state) => ({
//   //needs to return an object
//   //the properties in the object become available in props
// })

// const mapDispatchToProps = dispatch => ({
//   //makes updates to global state
//   //returns an object
//   //define a methods that dispatch an action
//   methodName : ( arg ) => dispatch( methodFromStore(arg) ),
//   })

// export default connect(mapStateToProps, mapDispatchToProps)(App);