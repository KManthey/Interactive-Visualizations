
console.log(temps);
var trace1 = {
  y: temps.newyork,
  name: "New York",
  type: "box",
  boxpoints: "all"
};
//console.log(temps); - will show what we have
//data is an array of objects
//our dictionary which has key values houston and newyourk and there values are stored in variable called temps
var trace2 = {
  y: temps.houston,
  name: "Houston",
  type: "box",
  boxpoints: "all"
};

var data = [trace1, trace2];

var layout = {
  title: "Temperature in New York and Houston, 2014-2015",
  yaxis: { title: "Degrees (F)"}
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);

//break this down into components 4 steps as a shell then look at the data and fill in the steps further
