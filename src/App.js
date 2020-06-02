import React, { useState, useEffect } from "react";
import logo from "logo.svg";
import "App.css";
import fetchJoke from "util/jokeFetch";

import Billboard from "component/Billboard";
import Button from "component/Button";

// useEffect for initial state
function App() {
  let [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJoke((res) => {
      setJoke(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>

      <Billboard joke={joke} />
      <Button onClick={() => fetchJoke(setJoke)} text={"Prev Joke"} />
      {/*Previous joke might not hold it's position when you click back then forward*/}
      <Button onClick={() => fetchJoke(setJoke)} text={"Next Joke"} />
    </div>
  );
}

export default App;
