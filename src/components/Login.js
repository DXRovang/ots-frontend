import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({loginFormData, updateLoginForm, login})=> {

    const handleChange = (e) =>{
      const {name, value} = e.target
      const updatedFormInfo = {
        ...loginFormData, 
        [name]: value,  
      }
      updateLoginForm(updatedFormInfo)
  }

    const handleSubmit = (e) =>{
    e.preventDefault() 
    login(loginFormData)
  }
  return(
    <form onSubmit={e => handleSubmit(e)}>
      <label>           
        <input type="text" placeholder="username" name="username" onChange={handleChange} value={loginFormData.username}/>Username
      </label><br></br>
      <label>           
        <input type="text" placeholder="password"name="password" onChange={handleChange} value={loginFormData.password}/>Password
      </label><br></br>
      <input type="submit" value="login"/>
    </form>
  )
}
const mapStateToProps = state => {
  return{
    loginFormData: state.loginForm
  }
}
export default connect(mapStateToProps, { updateLoginForm, login })(Login)

// import React from 'react'
// import { connect } from 'react-redux'
// import { createSession } from '../actions/createSession'
// // import {Link} from 'react-router-dom'
// import { Button } from 'reactstrap';

//   goBack(){
//     this.props.history.goBack()
//   }



//   handleSubmit = (e) =>{
//     e.preventDefault() 
//     console.log("hey, hey")
//     let formData = {
//     username: this.state.username,
//     password:this.state.password,
//     }
//     this.props.createSession(formData)
//     this.props.history.push('/home')



//         <Button onClick={() => this.goBack()}>Back</Button>
