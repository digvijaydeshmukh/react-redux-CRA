import React, { Component } from 'react';
import './App.css';
import FooterComp from './common/footer';
import RouterComp from './routes/route';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HeaderComp></HeaderComp> */}
          <RouterComp/>
        <FooterComp></FooterComp>
      </div>
    );
  }
}

export default App;
