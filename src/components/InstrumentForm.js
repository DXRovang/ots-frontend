import React from 'react'
import { connect } from 'react-redux'
import { createInstruments } from '../actions/createInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
class InstrumentForm extends React.Component{

  state = {
    layout: ""
    
  }

  goBack(){
    this.props.history.goBack()
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault() 
    console.log("hey, hey")
    // let formData = {
    //   layout: this.state.layout
    // }
    // this.props.createInstruments(formData)
    // this.props.history.push('/home')
  }
  render() {
    // debugger
    return(
      
      <div className="title form">
       
        <form onSubmit={e => this.handleSubmit(e)}>
          <select onChange={this.handleChange} name="layout" value={this.state.layout} >
            <option>Mandolin</option>
            <option>Guitar</option>
            <option>Banjo</option>
          </select>
          <button>Add Instrument</button>
        </form>
        <Button onClick={() => this.goBack()}>Back</Button>

      </div>
    )}
  }

export default connect(null,{createInstruments})(InstrumentForm)