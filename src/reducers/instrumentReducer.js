
export default function instrumentReducer(state = {instruments: []}, action){
// debugger
  switch(action.type){
      // case "@@INIT":
    case "FETCH_INSTRUMENTS":
      return {instruments: action.payload}
    default:
        return state
  }
}