
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Instrument from '../components/Instrument'
import Instruments from '../components/Instruments'
import Mandolins from '../components/Mandolins'
import Guitars from '../components/Guitars'
import Banjos from '../components/Banjos'
import { fetchInstruments } from '../actions/fetchInstruments'


class InstrumentsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }

  render(){
    return(
      <>
        <Switch>
          <Route exact path='/instruments' render={(routerProps) => 
            <Instruments {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/mandolins' render={(routerProps) => 
            <Mandolins {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/guitars' render={(routerProps) => 
            <Guitars {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/banjos' render={(routerProps) => 
            <Banjos {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/instruments/:id' render={(routerProps) => 
            <Instrument {...routerProps} instruments={this.props.instruments} />}/>
          }/>
        </Switch> 
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    instruments: state.instruments
  }
}

export default connect(mapStateToProps, {fetchInstruments})(InstrumentsContainer)