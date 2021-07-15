
export default function instrumentReducer(state = {instruments: []}, action){
  switch(action.type){
    case "FETCH_INSTRUMENTS":
      return {instruments: action.payload}
    case "CREATE_INSTRUMENTS":
      return {...state, instruments: state.instruments.map(instrument => {
        if(instrument.id === action.payload.id){
          return action.payload
        }else{
          return instrument
        }
      })}
    default:
        return state
  }
}