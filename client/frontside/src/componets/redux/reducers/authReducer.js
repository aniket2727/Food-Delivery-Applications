




// authReducer.js
const initialState = {
    email: '',
    loggedIn: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_LOGGED_IN':
        return { ...state, loggedIn: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  