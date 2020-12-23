// Initializes the page with a default plot
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];

  Plotly.newPlot("plot", data);
}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  //based on the value of the dropdown not the text of the dropdown

  // Initialize x and y arrays
  // -- this flushes out to repopulate
  var x = [];
  var y = [];

  if (dataset === 'dataset1') {
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 4, 8, 16];
  }

  else if (dataset === 'dataset2') {
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
  }

  // Note the extra brackets around 'x' and 'y'
  // restyle is going to use loaded and only display the changes done.  This is how you change (change event) based on user input
  // have a default set then dropdown for interaction
  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
//init is the trigger for the function called init at the beginning
