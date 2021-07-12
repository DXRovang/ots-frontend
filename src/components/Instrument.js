import React from 'react'

const Instrument = props =>{
  // debugger
  let instrument = props.instruments[0]
  // let instrument = match.props etc...

  return(
    <div>

    <div>Price: {instrument ? Math.floor(instrument.price) : null}</div>

  </div>
  )
}

export default Instrument