export function fetchUsers(){
  return (dispatch) => {
  fetch('http://127.0.0.1:3000/api/v1/users')
  .then(r=>r.json())
  .then(users=> 
    dispatch({
    type: "FETCH_USERS", 
    payload: users

    // payload: users.sort((a,b) => a.name.localeCompare(b.name))
  })
  )
}
}