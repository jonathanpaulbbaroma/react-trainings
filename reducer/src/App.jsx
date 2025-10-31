import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { balance: 0, amount: 1 });
  function reducer(state, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + state.amount };
      case "withdraw":
        return { ...state, balance: state.balance - state.amount };
      case "setAmount":
        return { ...state, amount: action.payload };
      default:
        throw new Error();
    }
  }
  return (
    <>
      <div>
        Use Reducer : {state.balance}
        <input
          type="text"
          value={state.amount}
          onChange={(e) =>
            dispatch({ type: "setAmount", payload: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: "deposit" })}>
          Deposit
        </button>
        <button onClick={() => dispatch({ type: "withdraw" })}>
          Withdraw
        </button>
      </div>
    </>
  );
}

export default App;
