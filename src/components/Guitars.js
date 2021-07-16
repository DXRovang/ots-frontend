import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchInstruments } from '../actions/fetchInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

class Guitars extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }
// debugger
render(){
let instruments = this.props.instruments.filter(instrument => instrument.family.name === "Guitar")

  return(
    <>
    <h3 className="title">Guitars</h3>
    <CardGroup>
      {instruments ? instruments.map(instrument => 
        <Card body inverse color="warning">
          <CardBody>
            <div key={instrument.id}>
              <CardText>
                Family:  {instrument ? instrument.family.name : null }<br></br>
                Category:  {instrument ? instrument.category.name : null }<br></br>
                Maker:  {instrument ? instrument.maker.name : null }<br></br>
              </CardText>   
            </div> 
            <Link to={`/instruments/${instrument.id}`}><Button>View</Button></Link>
          </CardBody>
        </Card>       
      ) : null }
    </CardGroup>
    </>
    ) 
  }
}
 const mapStateToProps = (state) =>{
    return {
      instruments: state.instruments
    }
  }

export default connect(mapStateToProps, {fetchInstruments})(Guitars)