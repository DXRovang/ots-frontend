// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  }
}


// asynchronous action creators
export const login = credentials =>{
  console.log("credentials", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(credentials)
    })
    .then(r=>r.json())
    .then(user => {
      if (user.error){
        alert(user.error)
      }else{
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log("fail"))
  }
}


export const getCurrentUser = () =>{
  console.log("Dispatching current user")
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json" 
      }
    })
    .then(r=>r.json())
    .then(user => {
      if (user.error){
        alert(user.error)
      }else{
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log("fail"))
  }
}