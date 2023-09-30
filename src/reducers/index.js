import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
} from "./../actions";

export const initialState = {
  display: 0,
  total: 0,
  operation: "+",
  memory: 0,
  isNew: true,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      const display =
        state.isNew || state.display == 0
          ? action.payload.toString()
          : state.display.toString() + action.payload.toString();
      return {
        ...state,
        display: Number(display),
        isNew: false,
      };

    case CHANGE_OPERATION:
      const result = calculateResult(
        state.total,
        state.display,
        state.operation
      );
      return {
        ...state,
        operation: action.payload,
        total: result,
        display: result,
        isNew: true,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        display: 0,
        isNew: true,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };
    case MEMORY_RECALL:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    default:
      return state;
  }
};

export default reducer;
