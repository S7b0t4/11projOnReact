import './App.css';
import {useRef, useState} from "react";
import Cvad from "./Comp/Cvad/Cvad";

function App() {
    const [out, setOut] = useState()
    const cvad = () => {
        setOut(<Cvad />)
    }
  return (
    <div className="App">
      <div className="title">Вычесление плошади</div>
      <div className="row_btn">
          <button onClick={cvad}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kvadrato.svg/800px-Kvadrato.svg.png" alt=""/></button>
      </div>
      <div className="row">
          {out}
      </div>
    </div>
  );
}

export default App;
