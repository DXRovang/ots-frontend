export function fetchMakers(){
  return (dispatch) => {
  fetch('http://127.0.0.1:3000/api/v1/makers')
  .then(r=>r.json())
  .then(makers=> 
    dispatch({
    type: "FETCH_MAKERS", 
    payload: makers.sort((a,b) => a.name.localeCompare(b.name))
  })
  )
}
}