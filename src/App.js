import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import ResumeAppBar from './ResumeAppBar';
import SassComponent from "./SassComponent";
import './App.css';
// import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <Fragment className="App">
        <ResumeAppBar/>
        <MyName/>
        <Counter/>
        <SassComponent />
      </Fragment>
    );
  }
}

export default App;
