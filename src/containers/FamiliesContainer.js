// import React from 'react'
// import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'
// import { fetchInstruments } from '../actions/fetchInstruments'
// import {
//   Card, Button, CardImg, CardTitle, CardText, CardGroup,
//   CardSubtitle, CardBody
// } from 'reactstrap';

// class FamiliesContainer extends React.Component{

//   componentDidMount(){
//     this.props.fetchInstruments()
//   }

//   render(){
//   // let instruments = this.props.instruments.filter(instrument => instrument.family.name === "Mandolin")

//   return(
//     <>
//     <CardGroup>
//       {instruments ? instruments.map(instrument => 
//         <Card body inverse style={{ backgroundColor: '#656', borderColor: '#333' }}>
//           <CardBody>
//             <div key={instrument.id}>
//               <CardText>
//                 Family:  {instrument ? instrument.family.name : null }<br></br>
//                 Category:  {instrument ? instrument.category.name : null }<br></br>
//                 Maker:  {instrument ? instrument.maker.name : null }<br></br>
//               </CardText>   
//             </div> 
//             <Link to={`/instruments/${instrument.id}`}><Button>View</Button></Link>
//           </CardBody>
//         </Card>       
//       ) : null }
//     </CardGroup>
//     </>
//     ) 
//   }
// }
//  const mapStateToProps = (state) =>{
//     return {
//       instruments: state.instruments
//     }
//   }

// export default connect(mapStateToProps, {fetchInstruments})(FamiliesContainer)

// //   <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
// //   <CardBody>
// //     <CardTitle tag="h5">Card title</CardTitle>
// //     <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
