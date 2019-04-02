import React, { Component } from "react";

class App extends Component {
   render() {
      return (
         <div>
            <h1>{new Date().getTime()}</h1>
         </div>
      )
   }
}

export default App;