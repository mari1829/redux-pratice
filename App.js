// import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import Result from "./react-redux/Result";
// import { store } from "./store";
import { store } from "./react-redux/Store";
// import { Provider } from "react-redux";



function App() {





  return (
    <div className="App">
      <Provider store={store} >
      <Result/>

      </Provider>
      
    </div>
  );
}

export default App;
