import React, { useState, useEffect } from "react";
import logo from "logo.svg";
import "App.css";

import Billboard from "component/Billboard";
import Button from "component/Button";

async function getJoke() {
  let joke = await fetch(
    "https://api.icndb.com/jokes/random?firstName=Paul&exclude=[explicit]"
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
        console.log(res);
      })
      .catch(function (e) {
        console.log("Error", e);
      });
  }

  let [joke, setJoke] = useState(null);

  useEffect(() => {
    initialJoke((res) => {
      setJoke(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>

      <Billboard joke={joke} />
      <Button onClick={() => initialJoke(setJoke)} text={"Prev Joke"} />
      {/*Previous joke might not hold it's position when you click back then forward*/}
      <Button onClick={() => initialJoke(setJoke)} text={"Next Joke"} />
    </div>
  );
}

export default App;
