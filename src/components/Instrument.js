import React from 'react'
import {Link} from 'react-router-dom'

const Instrument = props =>{

  if(props.match.params.id){
    let instrument = props.instruments[props.match.params.id - 1]
  return(
    <div>
      Family:  {instrument ? instrument.family.name : null }<br></br>
      Category:  {instrument ? instrument.category.name : null }<br></br>
      Maker:  {instrument ? instrument.maker.name : null }<br></br>
      Year:  {instrument ? instrument.year : null }<br></br>
      Color:  {instrument ? instrument.color : null }<br></br>
      Price:  {instrument ? Math.floor(instrument.price) : null}<br></br>
      Owner:  {instrument ? instrument.user.username : null }<br></br>

    </div>
  )
}else{
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
}

export default Instrument