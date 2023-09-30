import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import { initialState } from "./reducers";
import reducer from "./reducers";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (e) => {
    const { value } = e.target;
    const numberValue = Number(value);
    dispatch(applyNumber(Number(numberValue)));
  };

  const handlerOperationChange = (e) => {
    dispatch(changeOperation(e.target.value));
  };

  const handlerClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handlerMemoryAdd = () => {
    dispatch(addMemory());
  };
  const handlerMemoryRecall = () => {
    dispatch(recallMemory());
  };
  const handlerMemoryClear = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.display} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handlerMemoryAdd} />
              <CalcButton value={"MR"} onClick={handlerMemoryRecall} />
              <CalcButton value={"MC"} onClick={handlerMemoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickHandler} />
              <CalcButton value={2} onClick={clickHandler} />
              <CalcButton value={3} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickHandler} />
              <CalcButton value={5} onClick={clickHandler} />
              <CalcButton value={6} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickHandler} />
              <CalcButton value={8} onClick={clickHandler} />
              <CalcButton value={9} onClick={clickHandler} />
            </div>
            <div className="row ">
              <CalcButton value={0} onClick={clickHandler} />
              <CalcButton value={"CE"} onClick={handlerClearDisplay} />
              <CalcButton value={"="} onClick={handlerOperationChange} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handlerOperationChange} />
              <CalcButton value={"*"} onClick={handlerOperationChange} />
              <CalcButton value={"-"} onClick={handlerOperationChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
