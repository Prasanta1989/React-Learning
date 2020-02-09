import React from 'react';
import './App.css';
import Greet from "./component/Greet"
import Welcome from "./component/Welcome"
import Hello from "./component/JxsUsing"
import Message from "./component/Message"
import Counter from "./component/Counter"
import Functionclick from "./component/Functionclick"
import ClassClick from "./component/ClassClick"
import EventBind from './component/eventBind'
import ParentComponent from "./component/ParentComponent"

function App() {
  return (
    <div className="App">
      <ParentComponent /><br/>
      <EventBind></EventBind>
      <ClassClick></ClassClick>
      <Functionclick></Functionclick>
      {/* <Counter></Counter> */}
      {/* <Greet name="Prasanta">
        <p>My child tag</p>
      </Greet>

      <Greet name="Kumar"/>

      <Greet name="Sitha"/>

      <Welcome name="Props using class"/>
      <Welcome name="Props using class 2"/>

      <Hello /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
