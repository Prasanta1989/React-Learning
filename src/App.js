import React from 'react';
import './App.css';
import Greet from "./component/Greet"
import Welcome from "./component/Welcome"
import Hello from "./component/JxsUsing"
import Message from "./component/Message"

function App() {
  return (
    <div className="App">
      {/* <Greet name="Prasanta">
        <p>My child tag</p>
      </Greet>

      <Greet name="Kumar"/>

      <Greet name="Sitha"/>

      <Welcome name="Props using class"/>
      <Welcome name="Props using class 2"/>

      <Hello /> */}
      <Message />
    </div>
  );
}

export default App;
