
export default function makerReducer(state = {makers: []}, action){
  switch(action.type){
    case "FETCH_MAKERS":
      return {makers: action.payload}
    default:
        return state
  }
}