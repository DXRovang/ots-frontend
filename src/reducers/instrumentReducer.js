export default function instrumentReducer(state = [], action){
  switch(action.type){
    case "FETCH_INSTRUMENTS":
      return action.payload
    default:
        return state
  }
}