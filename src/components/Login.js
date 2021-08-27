import React from 'react'
import {Link} from 'react-router-dom'

import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

const Login = props =>{

  function goBack(){
    props.history.goBack()
  }

  return(
    <>
    <div className="text">Login Page.</div>
    <Button onClick={() => goBack()}>Back</Button>
    </>
  )}

export default Login