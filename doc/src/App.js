import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./views/main";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Main}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
