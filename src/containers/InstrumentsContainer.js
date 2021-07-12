
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Instrument from '../components/Instrument'
import { fetchInstruments } from '../actions/fetchInstruments'


class InstrumentsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }

  render(){
    // debugger
    return(
      <>
        <Switch>
        <Route exact path='/instruments' render={(routerProps) => 
              <Instrument {...routerProps} instruments={this.props.instruments} />}/>
         
          <Route exact path='/instruments/:id' render={(routerProps) => 
              <Instrument {...routerProps} instruments={this.props.instruments} />}/>
           
          }/>
       </Switch> 
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  // debugger
  return {
    instruments: state.instruments
    // price: state.price,
    // year: state.year,
    // color: state.color,
    // hole: state.hole,
    // user_id: state.user_id,
    // category_id: state.category_id,
    // maker_id: state.maker_id,
    // family_id: state.family_id
  }
}

export default connect(mapStateToProps, {fetchInstruments})(InstrumentsContainer)