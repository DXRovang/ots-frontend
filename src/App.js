
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import HomeContainer from './containers/HomeContainer'
import Mandolins from './components/Mandolins'
import Guitars from './components/Guitars'
import Banjos from './components/Banjos'
import Instrument from './components/Instrument'
import InstrumentForm from './components/InstrumentForm'
import { fetchInstruments } from './actions/fetchInstruments'
import Navbar from './Navbar'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchInstruments()
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/instruments/new' render={(routerProps) => 
            <InstrumentForm {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/home' render={(routerProps) => 
            <HomeContainer {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/mandolins' render={(routerProps) => 
            <Mandolins {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/guitars' render={(routerProps) => 
            <Guitars {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/banjos' render={(routerProps) => 
            <Banjos {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/instruments/:id' render={(routerProps) => 
            <Instrument {...routerProps} instruments={this.props.instruments} />}/>
        </Switch> 
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    instruments: state.instruments
  }
}

export default connect(mapStateToProps, {fetchInstruments})(App)

