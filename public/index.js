//front end calling the backend for info
//fetch the url
fetch("/notes")
  .then((response) => response.json()) //running method json on the response, destringify the json object from the server.
  .then((dataReturned) => console.log(dataReturned)); //.then takes an argument, this is a callback function
