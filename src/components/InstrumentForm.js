import React from 'react'
import { connect } from 'react-redux'
import { createInstruments } from '../actions/createInstruments'

class InstrumentForm extends React.Component{

  state = {
    layout: ""
    
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSumbit(e)}>
          <select onChange={this.handleChange} name="layout" value={this.state.layout}>
            <option>Mandolin</option>
            <option>Guitar</option>
            <option>Banjo</option>
          </select>
          <button>Add Instrument</button>
        </form>

      </div>
    )}
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSumbit = (e) =>{
    e.preventDefault() 
    let formData = {
      layout: this.state.layout
    }
    this.props.createInstruments(formData)
    this.props.history.push('/instruments')
  }

export default connect(null,{createInstruments})(InstrumentForm)