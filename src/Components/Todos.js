import { connect } from "react-redux";
import { useState } from "react";
const Todos = (props) => {
  console.log("props::", props);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="mybox">
      <div>
        <input
          type="text"
          placeholder="enter todo"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            props.dispatch({ type: "ADDTASK", payload: newTask });
          }}
        >
          {" "}
          addTodo
        </button>
      </div>
      <div>
        {props.todo.Todos.map((task, i) => {
          return (
            <div key={i}>
              <span> {task} </span>
              <button
                onClick={() => {
                  props.dispatch({ type: "DELETETODO", payload: i });
                }}
              >
                {" "}
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Todos);
