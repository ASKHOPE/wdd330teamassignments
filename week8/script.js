fetch("https://swapi.dev/api/people/?page=1").then((response) =>
  response.json()  .then((data) => console.log(data)));

