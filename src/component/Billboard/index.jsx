import React from "react";

function Billboard({ joke }) {
  return <blockquote>{joke ? joke.value.joke : ""}</blockquote>;
}

export default Billboard;
