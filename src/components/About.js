import React from 'react'
import {Link} from 'react-router-dom'

import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

const About = props =>{

  function goBack(){
    props.history.goBack()
  }

  return(
    <>
    <div className="text">This is a page talking about what the page is about.</div>
    <Button onClick={() => goBack()}>Back</Button>
    </>
  )}

export default About