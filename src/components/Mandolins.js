import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchInstruments } from '../actions/fetchInstruments'

class Mandolins extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }

  render(){
  let instruments = this.props.instruments.filter(instrument => instrument.family.name === "Mandolin")

  return(
      <div>
        {instruments ? instruments.map(instrument => 
        <div key={instrument.id}>
          <div>
          {/* <Link to="/instruments"> */}
          <Link to={`/instruments/${instrument.id}`}>
            Family:  {instrument ? instrument.family.name : null }<br></br>
            Category:  {instrument ? instrument.category.name : null }<br></br>
            Maker:  {instrument ? instrument.maker.name : null }<br></br>
          </Link>
          </div><br></br>
        </div>) : null }
      </div>
    ) 
  }
}
 const mapStateToProps = (state) =>{
    return {
      instruments: state.instruments
    }
  }

export default connect(mapStateToProps, {fetchInstruments})(Mandolins)