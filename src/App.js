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
import UserGreeting from "./component/UserGreeting"
import Namelist from "./component/Namelist"
import Customestyle from "./component/Customestyle"

import Inline from "./component/Inline"

function App() {
  return (
    <div className="App">
      <Inline />
      <Customestyle primary={true}/>
      <UserGreeting></UserGreeting><br/>
      <Namelist></Namelist><br/>
      <ParentComponent /><br/>
      <EventBind></EventBind><br/>
      <ClassClick></ClassClick><br/>
      <Functionclick></Functionclick><br/>
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
