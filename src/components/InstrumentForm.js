import React from 'react'
import { connect } from 'react-redux'
import { createInstruments } from '../actions/createInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

class InstrumentForm extends React.Component{

  state = {
    value: "",
    user: "1",
    family: "",
    category: "",
    maker: "",
    price: "",
    year: "",
    frets: "",
    material: "",
    neck: "",
    back: "",
    bridge: "",
    color: "",
    hole: "",
    description: "",
    placeholder: "Select"
  }

  goBack(){
    this.props.history.goBack()
  }
  handleChange = (e) =>{
    // debugger
    this.setState({
      [e.target.name]: e.target.value,
      // family: e.target.value,
    })

  }
  // handleCategoryChange = e =>{
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     category: e.target.value,
  //   })
  // }
  // handleMakerChange = e =>{
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //     maker: e.target.value,
  //   })
  // }

  handleSubmit = (e) =>{
    e.preventDefault() 
    console.log("hey, hey")
    let formData = {
    user: this.state.user,
    family: this.state.family,
    category:this.state.category,
    maker: this.state.maker,
    price: this.state.price,
    year: this.state.year,
    description: this.state.description
    }
    this.props.createInstruments(formData)
    this.props.history.push('/home')
  }
  render() {
    // debugger
    return(
      
      <div className="formtitle form"> 
        <form onSubmit={e => this.handleSubmit(e)}>
          <select onChange={this.handleChange}  name="family" value={this.state.family}>
            <option default>Select</option>
            <option>Mandolin</option>
            <option>Guitar</option>
            <option>Banjo</option>
          </select>Family<br></br>

          {this.state.family === "Guitar" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default>Select</option>  
                <option>6-string</option>
                <option>12-string</option>
                <option>Electric</option>
                <option>Hollow-body</option>
                <option>Semi-Hollow</option>
                <option>Resonator</option>
              </select>Category
            </>
          : null }
          {this.state.family === "Mandolin" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default>Select</option>  
                <option>F-style</option>
                <option>A-style</option>
              </select>Category
            </>
          : null }
          {this.state.family === "Banjo" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default >Select</option>    
                <option>4-string</option>
                <option>5-string</option>
              </select>Category
            </>
          : null }
          <br></br>
          <div>
            <label>           
              <input type="number" name="price" onChange={this.handleChange} value={this.state.price}/>Price
            </label><br></br>
            <label>          
              <input type="number" name="year" onChange={this.handleChange} value={this.state.year}/>Year
            </label><br></br>      
            {this.state.family === "Mandolin" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    <option>Weber</option>
                    <option>Eastman</option>
                    <option>Collings</option>
                  </select> Maker
                </label><br></br>
              </>
            : null }  
            {this.state.family === "Guitar" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    <option>Fender</option>
                    <option>Gibson</option>
                    <option>Martin</option>
                    <option>Taylor</option>
                    <option>D'Angelico</option>
                  </select> Maker
                </label><br></br>
              </>
            : null }
            {this.state.family === "Banjo" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    <option>Deering</option>
                    <option>Pisgah</option>
                    <option>Homemade</option>
                  </select> Maker
                </label><br></br>
              </>
            : null } 
           
            {/* <label>          
              <input type="number" name="frets"/>Frets
            </label><br></br>          
            <label>        
              <input type="text" name="material"/>Material
            </label><br></br> 
            {this.state.family === "Mandolin" ? 
              <>   
                <label>          
                  <input type="text" name="hole"/>SoundHole
                </label> <br></br>
              </>
            : null}
            <label>         
              <input type="text" name="neck"/>Neck
            </label><br></br>          
            <label>        
              <input type="text" name="back"/>Back
            </label><br></br>          
            <label>          
              <input type="text" name="bridge"/>Bridge
            </label><br></br>
            <label>       
              <input type="text" name="color"/>Color
            </label> */}

            <br></br>
            <br></br>
            <label> 
              <textarea name="description"/>Description
            </label>
            <br></br>
          </div>
          <button>Add Instrument</button>
        </form>
        <Button onClick={() => this.goBack()}>Back</Button>
      </div>
    )}
  }

export default connect(null,{createInstruments})(InstrumentForm)