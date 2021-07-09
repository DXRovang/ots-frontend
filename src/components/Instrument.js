import React from 'react'

const Instrument = props =>{
  // debugger
  let instrument = props.instruments[props.match.params.id]
  
  return(
    <div>

    <div>Description: {instrument ? instrument.price : null}</div>

  </div>
  )
}

export default Instrument