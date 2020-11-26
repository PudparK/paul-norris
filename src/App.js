import React, { useState, useEffect } from "react";
import "App.scss";

import Container from "component/Container";
import Button from "component/Button";
import Joke from "component/Joke";

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
    <Container>
      <h1>
        Paul Norris<span>.</span>
      </h1>
      <h3>
        <span>by </span>
        <a href="https://www.pudpark.dev">
          pudpark<span>.</span>dev
        </a>
      </h3>

      <Joke joke={joke} />
      <div className="buttonContainer">
        <Button onClick={() => initialJoke(setJoke)} text={"Prev Joke"} />
        {/*Previous joke might not hold it's position when you click back then forward*/}
        <Button onClick={() => initialJoke(setJoke)} text={"Next Joke"} />
      </div>
    </Container>
  );
}

export default App;
