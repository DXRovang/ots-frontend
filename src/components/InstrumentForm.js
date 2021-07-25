import React from 'react'
import { connect } from 'react-redux'
import { createInstruments } from '../actions/createInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

class InstrumentForm extends React.Component{

  state = {
    family: "",
    value: "1",
    category: ""
  }

  goBack(){
    this.props.history.goBack()
  }
  handleFamilyChange = (e) =>{
    // debugger
    this.setState({
      [e.target.name]: e.target.value,
      family: e.target.value,
    })

  }
  handleCategoryChange = e =>{
    this.setState({
      [e.target.name]: e.target.value,
      category: e.target.value,
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
          <select onChange={this.handleFamilyChange}  name="value" value={this.state.value}>
            <option value="1" disabled>Select</option>
            <option>Mandolin</option>
            <option>Guitar</option>
            <option>Banjo</option>
          </select><br></br>
          {/* <Category /> */}
          {this.state.family === "Guitar" ? 
          <select onChange={this.handleCategoryChange}  name="value" value={this.state.value} >
            <option selected value="Select">Select</option>  
            <option>6-string</option>
            <option>12-string</option>
            <option>Electric</option>
            <option>Hollow-body</option>
            <option>Semi-Hollow</option>
            <option>Resonator</option>
          </select> 
          : null }
          {this.state.family === "Mandolin" ? 
          <select onChange={this.handleCategoryChange}  name="value" value={this.state.value} >
            <option selected value="Select">Select</option>  
            <option>F-style</option>
            <option>A-style</option>
          </select> 
          : null }
          {this.state.family === "Banjo" ? 
          <select onChange={this.handleCategoryChange}  name="value" value={this.state.value} >
            <option selected value="Select" >Select</option>    
            <option>4-string</option>
            <option>5-string</option>
          </select> 
          : null }
          {/* <input>Description</input> */}
          <br></br>
          <label>
            Price:
            <input type="number" name="price"/>
          </label>
          <br></br>
          <label>
            Year:
            <input type="number" name="year"/>
          </label>
          <br></br>
          <label>
            Maker:
            <input type="text" name="maker"/>
          </label>
          <br></br>
          <label>
            Frets:
            <input type="number" name="frets"/>
          </label>
          <br></br>          
          <label>
            Material:
            <input type="text" name="material"/>
          </label>
          <br></br>          
          <label>
            SoundHole:
            <input type="text" name="hole"/>
          </label>
          <br></br>          
          <label>
            Neck:
            <input type="text" name="neck"/>
          </label>
          <br></br>          
          <label>
            Back:
            <input type="text" name="back"/>
          </label>
          <br></br>          
          <label>
            Bridge:
            <input type="text" name="bridge"/>
          </label>
          <br></br>
          <label>
            Color:
            <input type="text" name="color"/>
          </label>
          <br></br>
          <label>
            Description:
            <textarea name="description"/>
          </label>
          <br></br>
          <button>Add Instrument</button>
        </form>
        <Button onClick={() => this.goBack()}>Back</Button>
        {this.state.family === "Guitar" ? <div>guitar</div> : null }
      </div>
    )}
  }

export default connect(null,{createInstruments})(InstrumentForm)