// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);
console.log(us)
console.log(uk)
console.log(canada)


// @ADD YOUR CODE HERE
var trace1 = {values:us, labels:labels, "pie"}
var data = [trace1]


Plotly.newplot("pie", data, layout);
