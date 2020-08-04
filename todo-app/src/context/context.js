import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "loggedin":
      return { ...state, user: action.payload };
    case "loggedout":
      return { ...state, user: '' };
    default:
      return;
  }
};
const initialState = { user: 'Developer' }
const TodoAppContext = React.createContext(initialState)

const TodoAppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return  <TodoAppContext.Provider value={{state, dispatch}}>
        {props.children}
    </TodoAppContext.Provider>
}
export { TodoAppContext, TodoAppProvider };