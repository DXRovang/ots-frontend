
import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import mando from "../assets/mando.jpeg"
import guitar from "../assets/guitar.jpg"
import banjo from "../assets/banjo.JPG"
// import Instrument from '../components/Instrument'
// import Instruments from '../components/Instruments'
// import Mandolins from '../components/Mandolins'
// import Guitars from '../components/Guitars'
// import Banjos from '../components/Banjos'
import { fetchInstruments } from '../actions/fetchInstruments'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';


class HomeContainer extends React.Component{

  componentDidMount(){
    this.props.fetchInstruments()
  }

  render(){
    return(
      <>
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={mando} alt="Mando Pic" />
        <CardBody>
          <CardTitle tag="h5">Mandolins</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Link to="/mandolins"><Button>Search</Button></Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={guitar} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Guitars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Link to="/guitars"><Button>Search</Button></Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={banjo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Banjos</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Link to="/banjos"><Button>Search</Button></Link>
        </CardBody>
      </Card>
    </CardGroup>
        {/* <Switch>
          <Route exact path='/instruments' render={(routerProps) => 
            <Instruments {...routerProps} instruments={this.props.instruments} />}/>
                    <Route exact path='/guitars' render={(routerProps) => 
            <Guitars {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/banjos' render={(routerProps) => 
            <Banjos {...routerProps} instruments={this.props.instruments} />}/>
          <Route exact path='/instruments/:id' render={(routerProps) => 
            <Instrument {...routerProps} instruments={this.props.instruments} />}/>
          }/>
        </Switch>  */}
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    instruments: state.instruments
  }
}

export default connect(mapStateToProps, {fetchInstruments})(HomeContainer)