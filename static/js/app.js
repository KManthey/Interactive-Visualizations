//Examples

//from 2/7 
    // Use D3 to create an event handler
    // d3.selectAll("body").on("change", updatePage);

    // function updatePage() {
    // // Use D3 to select the dropdown menu
    // var dropdownMenu = d3.selectAll("#selectOption").node();
    // // Assign the dropdown menu item ID to a variable
    // var dropdownMenuID = dropdownMenu.id;
    // // Assign the dropdown menu option to a variable
    // var selectedOption = dropdownMenu.value;

    // console.log(dropdownMenuID);
    // console.log(selectedOption);
    // }

//see 2/9 for after plot

   //this comes from an array of objects so I use index??
// my data - samples dictionary
// 3 keys
// names[0]
// metadata[1]
// samples[2]
//    otu_ids
//    sample_values
//    otu_labels

//id[0]
// ethnicity[1]
// gender[2]
// age[3]
// location[4]
// bbtype[5]
// wfreq[6]
//************************************* */


//drop down menu
   function drop_menu(){
       var dropdown_id=d3.select("#selDataset")
       d3.json("samples.json").then((data)=>{
           //assign value of the dropdown menu option to variable samples
           var samples=data.names;
           console.log(samples);
           //loops through data and appends each name to samples
           samples.forEach((sample)=>{
               dropdown_id.append("option")
               .text(sample)
               .property("value", sample);
           });
           var firstsample=samples[0];

         })
   }
   drop_menu();

// Use D3 to create an event handler
d3.select("#selDataset").on("change", updateValues);

let current_id = ""
let samples_metadata = ""
let current_sample = ""
let samples_samples = ""

d3.json("samples.json").then((data)=>{
    //assign value of the dropdown menu option to variable samples
  samples_metadata = data.metadata;
  samples_samples = data.samples;
})

function updateValues() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.selectAll("#selDataset").node();
    // Assign the dropdown menu item ID to a variable
    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;
   
    current_id = samples_metadata.filter(data=>data.id == selectedOption);
    current_sample = samples_samples.filter(data=>data.id == selectedOption);
    console.log(current_sample);
    clearMetadataTable()
    buildTable()
    buildBar()
    buildBubbles()
  }


//we have selected the items now we have to render them.
//the below should grab the values, but how does it do this for the correct id?


  function buildTable(id, ethnicity, gender, age, location, bbtype, wfreq) {
    var div = d3.select("#sample-metadata");
    console.log(div)
      div.insert("p").text(`id: ${current_id[0].id}`);
      div.insert("p").text(`gender: ${current_id[0].gender}`);
      div.insert("p").text(`age: ${current_id[0].age}`);
      div.insert("p").text(`location: ${current_id[0].location}`);
      div.insert("p").text(`bbtype: ${current_id[0].bbtype}`);
      div.insert("p").text(`wfreq: ${current_id[0].wfreq}`);
         console.log("buildTable");
  }

function clearMetadataTable()
{
d3.select("#sample-metadata").selectAll("*").remove();
}

//get data - sample sample otu and sample sample sample_values by id
//return data for bar
// sample_values  as the values for the bar chart
//otu_ids as the labels  otu_labels as the hovertext for the chart
//order in max order by otu
//diplay top 10 OTUs for the individual id selected
//***note they don't actually want labels they want the ids to read OTU 1167 etc*** */
//need to set to max top 10

//??sort the data array using hte sample values?? ****see 3/7
// current_sample.sort(function(a, b) {
//   return parseFloat(b.current_sample.sample_values) - parseFloat(a.current_sample.sample_values);
// });
// // slice the first 10 objects for plotting
// cdata = current_sample.slice(0, 10);
// // reverse the array due to Plotly's defaults - see below where I have reversed y and x ...think do this instead.
// cdata = cdata.reverse();

// create barchart
   function buildBar() {
    var chartData = {
      y: current_sample[0].otu_ids,
      x: current_sample[0].sample_values,
      type: 'bar',
      orientation: 'h',
      size: current_sample[0].sample_values,
      text: current_sample[0].otu_labels,
    }
    // var layout = {
    //   title: "test",
    //   xaxis: { title: "Sample" },
    //   yaxis: { title: "OTU ID" }
    // };
    var data = [chartData];
    //removed layout from below     
    Plotly.newPlot('bar', data);

}

//Create a bubble chart that displays each sample.  I believe this is not based on the ID selected, this is all IDs and their otu values.
//disengage this from the dropdown selection  - change from current_sample to samples
//x values = otu_ids  sample_values for the y values
// otu_ids for the marker colors
// otu_labels for the text values
// var id = current_sample[0].otu_ids
function buildBubbles() {
  var bubbleData = {
    x: current_sample[0].otu_ids,
    y: current_sample[0].sample_values,
    text: current_sample[0].otu_labels,
    // color: "id",
    mode: 'markers',
    marker: {
        size: [40, 60, 80, 100]
   }}
var data = [bubbleData];
var layout = {
        // title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
      };
  Plotly.newPlot('bubble', data, layout);
 
}
// buildPlot

// attr("cx", d => xLinearScale(d.hair_length))
//     .attr("cy", d => yLinearScale(d.num_hits))
//     .attr("r", "15")
//     .attr("fill", "pink")
//     .attr("opacity", ".5");


//     var trace1 = {
//       x: [1, 2, 3, 4],
//       y: [10, 11, 12, 13],
//       mode: 'markers',
//       marker: {
//         size: [40, 60, 80, 100]
//       }
//     };
    
//     


        
        
        
//         console.log(samples);
//         samples.forEach((sample)=>{
//             meta_id.append("option")
//             .text(sample)
//             .property("value", sample);
//         });
//         var firstsample=samples[0];

//       })
// }
// drop_menu();
// 
// }




// //Charts
// function buildCharts(sample) {
//     var colors  = 
//     d3.json("samples.json").then((data)=>{

//     })
// }

// 

