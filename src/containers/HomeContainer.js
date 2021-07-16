
import React from 'react'
import {Link} from 'react-router-dom'
import mando from "../assets/mando.jpeg"
import guitar from "../assets/guitar.jpg"
import banjo from "../assets/banjo.JPG"
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

function HomeContainer (){

  return(
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={mando} alt="Mando Pic" />
        <CardBody>
          <CardTitle tag="h5">Mandolins</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Shazam</CardSubtitle>
          <CardText>Super cool factoid about mandos</CardText>
          <Link to="/mandolins"><Button>Search</Button></Link><br></br><br></br>
          <Link to="/mandolins"><Button>Add</Button></Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={guitar} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Guitars</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Crack</CardSubtitle>
          <CardText>Super cool factoid about guitars</CardText>
          <Link to="/guitars"><Button>Search</Button></Link><br></br><br></br>
          <Link to="/guitars"><Button>Add</Button></Link>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={banjo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Banjos</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Pow</CardSubtitle>
          <CardText>Super cool factoid about banjos</CardText>
          <Link to="/banjos"><Button>Search</Button></Link><br></br><br></br>
          <Link to="/banjos"><Button>Add</Button></Link>
        </CardBody>
      </Card>
    </CardGroup>
    )
  }

export default HomeContainer