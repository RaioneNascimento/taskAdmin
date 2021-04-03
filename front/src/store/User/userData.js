const initialState = { 
  idValue: '',
  nameValue: ''
}

export const userData = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ID_VALUE':
      return {
        ...state, 
        idValue: action.data.id,
        nameValue: action.data.name
      }
      break;
  
    default: 
      return state
      break;
  }
};