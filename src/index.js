//Challenge 1 (copy moment.js and past on HTML head)

//Challenge 2
let currentDateElement = document.querySelector("#current-date");
let currentDate = moment().format("[Today is] dddd, MMMM D, YYYY");
currentDateElement.innerHTML = currentDate;

//Challenge 3
let futureDateElement = document.querySelector("#future-date");
let futureDate = moment()
  .add(10, "years")
  .format("[10 years from now, it will be] dddd, MMMM D, YYYY HH:mm:ss");
futureDateElement.innerHTML = futureDate;
