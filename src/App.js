import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./counter";
import CounterClass from "./counterClass";
import rootReducer from "./store";
function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <h1> React Intro</h1>
        <Counter />
        <CounterClass />
      </div>
    </Provider>
  );
}

export default App;
