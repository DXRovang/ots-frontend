
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'

// import InstrumentsContainer from './containers/InstrumentsContainer'
import HomeContainer from './containers/HomeContainer'
import Mandolins from './components/Mandolins'
import Guitars from './components/Guitars'
import Banjos from './components/Banjos'


function App() {
  return (
    <div className="App">
      {/* <InstrumentsContainer /> */}
      <Route exact path='/home'><HomeContainer /></Route>
      <Route exact path='/mandolins'><Mandolins /></Route>
      <Route exact path='/guitars'><Guitars /></Route>
      <Route exact path='/banjos'><Banjos /></Route>
    </div>
  );
}

export default App;

