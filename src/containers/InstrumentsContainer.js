
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
// import DrawForm from '../components/DrawForm'
// import DrawList from '../components/DrawList'
import Instrument from '../components/Instrument'
// import { fetchDraws } from '../actions/fetchDraws'
import { fetchInstruments } from '../actions/fetchInstruments'


class InstrumentsContainer extends React.Component{

componentDidMount(){
  this.props.fetchInstruments()
}

    render(){
      return(
        <>
          <Switch>
            {/* <Route path='/draws/new' render={(routerProps) => 
                <DrawForm {...routerProps} cards={this.props.cards} draws={this.props.draws} />} /> 
            <Route exact path='/draws' render={(routerProps) => 
                <DrawList {...routerProps} draws={this.props.draws} />} /> */}
            <Route path='/instruments/:id' render={(routerProps) => 
              <>
                <Instrumet {...routerProps} 
                // cards={this.props.cards} draws={this.props.draws} 
                />
              </> 
            }/>
          </Switch>
        </>
      )
    }
}

const mapStateToProps = (state) =>{
  return {
    price: state.price,
    year: state.year,
    color: state.color,
    hole: state.hole,
    user_id: state.user_id,
    category_id: state.category_id,
    maker_id: state.maker_id,
    family_id: state.family_id
  }
}

export default connect(mapStateToProps, {fetchInstruments})(InstrumentsContainer)