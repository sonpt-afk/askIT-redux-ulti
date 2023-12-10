// import "./App.css";
import { connect } from "react-redux";
import Home from "./components/Home";
import { increaseCounter, decreaseCounter } from "./action/actions";
function App() {
  return (
    <>
      <Home />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
