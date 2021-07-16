import React from 'react'

const Instrument = props =>{
// debugger
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
}

export default Instrument