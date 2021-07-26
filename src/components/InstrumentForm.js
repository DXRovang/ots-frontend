import React from 'react'
import { connect } from 'react-redux'
import { createInstruments } from '../actions/createInstruments'
import { Button } from 'reactstrap';

const families = ["Mandolin", "Guitar", "Banjo"]
const guitarCategories = ["6-string Acoustic","12-string Acoustic","Electric","Hollow-body","Semi-Hollow","Resonator"]
const mandolinCategories = ["F-style", "A-style", "Bowl-Back"]
const banjoCategories = ["Plectrum", "Irish Tenor", "4-string Open-Back", "5-string Resonator", "5-string Open-Back"]

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
    })

  }

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

            {families.map(family => 
              <option>{family}</option>)}
          </select>Family<br></br>

          {this.state.family === "Guitar" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default>Select</option>  
                {guitarCategories.map(guitar =>
                  <option>{guitar}</option>)}
              </select>Category
            </>
          : null }
          {this.state.family === "Mandolin" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default>Select</option>  
                {mandolinCategories.map(mandolin =>
                  <option>{mandolin}</option>)}
              </select>Category
            </>
          : null }
          {this.state.family === "Banjo" ? 
            <>
              <select onChange={this.handleChange}  name="category" value={this.state.category} >
                <option default >Select</option>    
                {banjoCategories.map(banjo =>
                  <option>{banjo}</option>)}
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

            <label> 
              <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                <option default>Select</option>  
                {this.props.makers.makers.map(maker=>
                <option>{maker.name}</option>)}
              </select> Maker
            </label><br></br>

            {/* {this.state.family === "Mandolin" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    {this.props.makers.makers.map(maker=>
                      <option>{maker}</option>)}
                  </select> Maker
                </label><br></br>
              </>
            : null }   */}
            {/* {this.state.family === "Guitar" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    {this.props.makers.makers.map(maker=>
                      <option>{maker}</option>)}
                  </select> Maker
                </label><br></br>
              </>
            : null } */}
            {/* {this.state.family === "Banjo" ? 
              <>
                <label> 
                  <select onChange={this.handleChange}  name="maker" value={this.state.maker} >
                    <option default>Select</option>  
                    {this.props.makers.makers.map(maker=>
                      <option>{maker}</option>)}
                  </select> Maker
                </label><br></br>
              </>
            : null }  */}
           
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