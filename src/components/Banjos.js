import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchInstruments } from '../actions/fetchInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
class Banjos extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }

  goBack(){
    this.props.history.goBack()
  }
// debugger
render(){
let instruments = this.props.instruments.instruments.filter(instrument => instrument.family.name === "Banjo")

  return(
    <>
    <h3 className="title">Banjos</h3>
    <CardGroup>
      {instruments ? instruments.map(instrument => 
        <Card body inverse style={{ backgroundColor: '#646', borderColor: '#333' }}>
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
    <Button className="indent2" onClick={() => this.goBack()}>Back</Button>
    </>
    ) 
  }
}
 const mapStateToProps = (state) =>{
    return {
      instruments: state.instruments
    }
  }

export default connect(mapStateToProps, {fetchInstruments})(Banjos)