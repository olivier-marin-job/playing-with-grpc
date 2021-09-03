import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GreetServiceClient} from "./output/src/proto/GreetingServiceClientPb";
import {Greeting, GreetRequest, GreetResponse} from "./output/src/proto/greeting_pb";
// import {GreetingServiceClient} from "./output/src/proto/greeting_pb_service";
// import {Greeting, GreetRequest} from "./output/src/proto/greeting_pb";


function App() {

  const test= () => {
    const req = new GreetRequest();
    const greet = new Greeting();
    greet.setFirstName("slimen qsdqsdqsd");
    greet.setLastName("arnaout");
    req.setGreeting(greet);
    const client = new GreetServiceClient('http://localhost:8080').greet(req, {}, (err, response: GreetResponse) => {
      console.log(response.getResult());
    });

    client.on('status', (status: any) => {
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
