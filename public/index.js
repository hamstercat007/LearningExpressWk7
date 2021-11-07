//front end calling the backend for info

//fetch the url
fetch("/notes")
  .then((response) => response.json()) //running method json on the response, destringify the json object from the server.
  .then((dataReturned) => {
    odEl = document.getElementById("orderedList");
    dataReturned.forEach((element) => {
      let li = document.createElement("li");
      li.innerText = element.title + ": " + element.content.substring(0, 20);
      odEl.appendChild(li);
    });
  }); //.then takes an argument, this is a callback function
