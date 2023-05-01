const initialState = {
  Todos: ["vasu", "akhil", "hemanth"]
};

const todoReducers = (state = initialState, action) => {
  if (action.type === "ADDTASK") {
    return {
      ...state,
      Todos: [...state.Todos, action.payload]
    };
  }
  if (action.type === "DELETETODO") {
    var temp = [...state.Todos];
    temp.splice(action.payload, 1);
    return {
      ...state,
      Todos: [...temp]
    };
  }
  return state;
};

export default todoReducers;
