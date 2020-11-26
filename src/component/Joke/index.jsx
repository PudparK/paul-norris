import React from "react";
import styles from "./styles.module.scss";

function Joke({ joke }) {
  return <p className={styles.joke}>{joke ? joke.value.joke : ""}</p>;
}

export default Joke;
