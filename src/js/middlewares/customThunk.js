const customThunk = (extraArg) => ({ dispatch, getState }) => next => 
    action => typeof action === 'function' ? action(dispatch, getState, extraArg) : next(action);

export default customThunk();




// REDUX THUNK IMPLEMENTATION

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }
  
      return next(action);
    };
  }
  
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;