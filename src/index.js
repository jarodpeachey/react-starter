import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";


setInterval(function(){
   ReactDOM.render(<App />, document.getElementById("app"));
}, 2000)