
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import HomeContainer from './containers/HomeContainer'
import Mandolins from './components/Mandolins'
import Guitars from './components/Guitars'
import Banjos from './components/Banjos'
import Instrument from './components/Instrument'
import About from './components/About'
import Login from './components/Login'
import InstrumentForm from './components/InstrumentForm'
import { fetchInstruments } from './actions/fetchInstruments'
import { fetchMakers } from './actions/fetchMakers'
import { fetchUsers } from './actions/fetchUsers'
// import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

import Navbar from './Navbar'


class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.fetchInstruments()
    this.props.fetchMakers()
    // this.props.fetchUser()
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/instruments/new' render={(routerProps) => 
            <InstrumentForm {...routerProps} instruments={this.props.instruments} makers={this.props.makers} users={this.props.users}/>}/>
          <Route exact path='/about' render={(routerProps) => 
            <About {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/login' render={(routerProps) => 
            <Login {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/home' render={(routerProps) => 
            <HomeContainer {...routerProps} instruments={this.props.instruments} makers={this.props.makers} users={this.props.users}/>}/>
          <Route exact path='/mandolins' render={(routerProps) => 
            <Mandolins {...routerProps} instruments={this.props.instruments} makers={this.props.makers} users={this.props.users}/>}/>
          <Route exact path='/guitars' render={(routerProps) => 
            <Guitars {...routerProps} instruments={this.props.instruments}makers={this.props.makers} users={this.props.users} />}/>
          <Route exact path='/banjos' render={(routerProps) => 
            <Banjos {...routerProps} instruments={this.props.instruments} makers={this.props.makers} users={this.props.users}/>}/>
          <Route exact path='/instruments/:id' render={(routerProps) => 
            <Instrument {...routerProps} instruments={this.props.instruments} makers={this.props.makers} users={this.props.users} />}/>
        </Switch> 
    </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    instruments: state.instruments,
    makers: state.makers
  }
}

export default connect(mapStateToProps, {getCurrentUser, fetchInstruments, fetchMakers, fetchUsers})(App)

