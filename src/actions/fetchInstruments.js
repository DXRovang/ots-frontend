export function fetchInstruments(){
    return (dispatch) => {
    fetch('http://127.0.0.1:3000/api/v1/instruments')
    .then(r=>r.json())
    .then(instruments=> 
      dispatch({
      type: "FETCH_INSTRUMENTS", 
      payload: instruments
    })
    )
  }
}