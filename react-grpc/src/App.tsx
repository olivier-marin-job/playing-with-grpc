import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GreetingServiceClient} from "./output/src/proto/GreetingServiceClientPb";
import {Greeting, GreetRequest} from "./output/src/proto/greeting_pb";
// import {GreetingServiceClient} from "./output/src/proto/greeting_pb_service";
// import {Greeting, GreetRequest} from "./output/src/proto/greeting_pb";


function App() {

  const test= () => {
    const req = new GreetRequest();
    const greet = new Greeting();
    greet.setFirstName("slimen qsdqsdqsd");
    greet.setLastName("arnaout");
    req.setGreeting(greet);
    const client = new GreetingServiceClient('http://localhost:50051').greet(req, {}, (err, response) => {
      console.log({err, response});
    });

    client.on('status', (status) => {
      console.log({status});
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Click!</button>
    </div>
  );
}

export default App;
