import { connect } from "react-redux";

const Counter = (props) => {
  console.log("props:", props);
  return (
    <div className="mybox">
      <h3>Count:{props.counter.Count} </h3>
      <button
        onClick={() => {
          props.dispatch({ type: "INC" });
        }}
      >
        {" "}
        INC{" "}
      </button>
      &nbsp;
      <button
        onClick={() => {
          props.dispatch({ type: "DEC" });
        }}
      >
        {" "}
        DEC
      </button>
      &nbsp;
      <button
        onClick={() => {
          props.dispatch({ type: "RESET" });
        }}
      >
        {" "}
        RESET
      </button>
      &nbsp;
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Counter);
