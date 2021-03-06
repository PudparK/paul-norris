import React, { useState, useEffect } from "react";
import "App.scss";

import Container from "component/Container";
import Button from "component/Button";
import Joke from "component/Joke";

// useEffect for initial state
function App() {
  let [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJoke((res) => {
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
