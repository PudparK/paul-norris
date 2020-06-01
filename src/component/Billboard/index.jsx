import React from "react";

function Billboard({ joke }) {
  return <blockquote>{joke ? joke.value.joke : "Click Next Joke"}</blockquote>;
}

export default Billboard;
