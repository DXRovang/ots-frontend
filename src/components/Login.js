import React from 'react'
import { connect } from 'react-redux'
import { createSession } from '../actions/createSession'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

class Login extends React.Component{

  goBack(){
    this.props.history.goBack()
  }

  render(){
    return(
      <>
        <div className="text">Login Page.</div>
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