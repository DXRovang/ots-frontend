import React from 'react'
import { connect } from 'react-redux'
import { createSession } from '../actions/createSession'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

class Login extends React.Component{

  state = {
    username: "",
    email: "",
    password: ""
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
    username: this.state.username,
    email: this.state.email,
    password:this.state.password,
    }
    this.props.createSession(formData)
    this.props.history.push('/home')
  }

  render(){
    return(
      <>
        <div className="text">Login Page</div>

        <div className="formtitle form">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label>           
              <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>Username
            </label><br></br>
            <label>           
              <input type="text" name="email" onChange={this.handleChange} value={this.state.email}/>Email
            </label><br></br>
            <label>           
              <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>Password
            </label><br></br>
          </form>
        </div>






        <Button onClick={() => this.goBack()}>Back</Button>
      </>
    )
  }
}
export default connect(null,{createSession})(Login)
// const Login = props =>{

//   function goBack(){
//     props.history.goBack()
//   }

//   return(
//     <>
//     <div className="text">Login Page.</div>
//     <Button onClick={() => goBack()}>Back</Button>
//     </>
//   )}

// export default Login