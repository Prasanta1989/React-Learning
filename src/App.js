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
import Form from "./component/Form"
import Inline from "./component/Inline"
import LifecycleA from "./component/LifecycleA"
import FragmentDemo from "./component/FragmentDemo"
import Table from "./component/Table"
import ParentComp from "./component/ParentComp"
import RefsDemo from "./component/RefsDemo"
import FocusInput from "./component/FocusInput"
import ParentFRInput from "./component/ParentFRInput"
import Portal from "./component/Portal"
import Hero from "./component/Hero"
import ErrorBoundary from "./component/ErrorBoundary"
import ClickCounter from "./component/ClickCounter"
import HoverCounter from "./component/HoverCounter"


function App() {
  return (
    <div className="App">
      <HoverCounter />
      <ClickCounter />
      {/* <ErrorBoundary>
        <Hero heroName="Prasanta" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Biku" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName= "Joker" />
      </ErrorBoundary> */}

      <Portal />
      <ParentFRInput />
      <FocusInput />
      <RefsDemo />
      <ParentComp />
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
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
