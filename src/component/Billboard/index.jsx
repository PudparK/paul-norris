import React from "react";

function Billboard({ joke }) {
  return <blockquote>{joke ? joke : ""}</blockquote>;
}

export default Billboard;
