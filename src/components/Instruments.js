import React
// ,{ useState } 
from 'react'
import {Link} from 'react-router-dom'

const Instruments = props =>{

    // let instruments = props.instruments

    // let [instruments, setInstruments] = useState(null)
    // let [filteredInstruments, setfilteredInstruments] = useState(null)

    // let mandos = props.instruments.filter(instrument => instrument.family.name === "Mandolin")
    // let guitars = props.instruments.filter(instrument => instrument.family.name === "guitar")
    // let banjos = props.instruments.filter(instrument => instrument.family.name === "Banjo")

    // function showMandos(){
    //   setfilteredInstruments(mandos)
    // }
    // function showGuitars(){
    //   setfilteredInstruments(guitars)
    // }
    // function showBanjos(){
    //   setfilteredInstruments(banjos)
    // }

    // return(
    //   <div>
      //   <button onClick={() => showMandos()}>Mandolins</button>
      //   <button onClick={() => showMandos()}>Guitars</button>
      //   <button onClick={() => showMandos()}>Banjos</button> 
      //  {filteredInstruments && filteredInstruments.map(instrument => 
      //       <div key={instrument.id}>
      //         <div>
      //         <Link to={`/instruments/${instrument.id}`}>
      //           Family:  {instrument ? instrument.family.name : null }<br></br>
      //           Category:  {instrument ? instrument.category.name : null }<br></br>
      //           Maker:  {instrument ? instrument.maker.name : null }<br></br>
      //         </Link>
      //         </div><br></br>
      //       </div>)} 

let instruments = props.instruments

return(
      <div>
         {instruments ? instruments.map(instrument => 
          <div key={instrument.id}>
            <div>
            <Link to={`/instruments/${instrument.id}`}>
              Family:  {instrument ? instrument.family.name : null }<br></br>
              Category:  {instrument ? instrument.category.name : null }<br></br>
              Maker:  {instrument ? instrument.maker.name : null }<br></br>
            </Link>
            </div><br></br>
          </div>) : null }
      </div>
    ) 
  }


export default Instruments