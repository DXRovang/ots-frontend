
export default function instrumentReducer(state = {instruments: []}, action){
  switch(action.type){
    case "FETCH_INSTRUMENTS":
      return {instruments: action.payload}
    default:
        return state
  }
}