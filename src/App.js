import React, { useState } from "react";
import logo from "logo.svg";
import "App.css";

import Billboard from "component/Billboard";
import Button from "component/Button";

async function getJoke() {
  let joke = await fetch(
    "http://api.icndb.com/jokes/random?firstName=Paul&exclude=[explicit]"
  );

  // just in case make a set of default jokes or default categories.
  let jokeData = await joke.json();

  return jokeData;
}

// useEffect for initial state
function App() {
  function initialJoke(cb) {
    getJoke()
      .then(function (res) {
        cb(res);
      })
      .catch(function (e) {
        console.log("Error", e);
      });
  }

  let [joke, setJoke] = useState();

  return (
    <div className="App">
      <header className="App-header"></header>

      <Billboard joke={joke} />
      <Button onClick={() => initialJoke(setJoke)} />
    </div>
  );
}

export default App;
