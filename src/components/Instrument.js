import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Instrument = props =>{

  let instrument = props.instruments[props.match.params.id - 1]

  function goBack(){
    props.history.goBack()
  }
 
  return(
   
    // <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //   <CardTitle tag="h5">Card title</CardTitle>
    //   <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    <Card className="single">
      <CardBody>
        <CardText>
          {instrument ?
          <>
          Family:  {instrument.family.name}<br></br>
          Category:  {instrument.category.name}<br></br>
          Maker:  {instrument.maker.name}<br></br>
          Year:  {instrument.year ? instrument.year : "n/a"}<br></br>
          Color:  {instrument.color ? instrument.color : "n/a" }<br></br>
          Material:   {instrument.material ? instrument.material : "n/a" }<br></br>
          Neck:   {instrument.neck ? instrument.neck : "n/a" }<br></br>
          Bridge:   {instrument.bridge ? instrument.bridge : "n/a" }<br></br>
          Back:   {instrument.back ? instrument.back : "n/a" }<br></br>
          SoundHole:    {instrument.hole ? instrument.hole : "n/a" }<br></br>
          Frets:    {instrument.frets ? instrument.frets : "n/a" }<br></br>
          Description:    {instrument.description ? instrument.description : null }<br></br>
          Price:  ${instrument ? Math.floor(instrument.price) : null}<br></br>
          Owner:  {instrument.user.username}<br></br>
          </> : null}
        </CardText>
        <Button onClick={() => goBack()}>Back</Button>
      </CardBody>
    </Card>
    )
}

export default Instrument


