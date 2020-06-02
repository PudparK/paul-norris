async function fetchJoke(cb) {
  let joke = await fetch(
    "https://api.icndb.com/jokes/random?firstName=Paul&exclude=[explicit]"
  );

  // just in case make a set of default jokes or default categories.
  let jokeData = await joke.json();
  jokeData = jokeData.value.joke;
  joke = jokeData.split("&quot;").join('"');
  const badwords = /(sex|sperm|pussy|vagina|hung|fuck|bitch|cock|balls|condom|porn)/gi;
  if (joke.match(badwords)) {
    fetchJoke(cb);
  } else {
    cb(joke);
  }
}

export default fetchJoke;
