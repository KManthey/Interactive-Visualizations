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

let current_selection = ""
let samples_metadata = ""

d3.json("samples.json").then((data)=>{
    //assign value of the dropdown menu option to variable samples
  samples_metadata = data.metadata;
})
        

function updateValues() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.selectAll("#selDataset").node();
    // Assign the dropdown menu item ID to a variable
    // Assign the dropdown menu option to a variable
    var selectedOption = dropdownMenu.value;
   
    current_selection = samples_metadata.filter(data=>data.id == selectedOption)
    console.log(current_selection);
    console.log(dropdownMenuID);
  }

//we have selected the items now we have to render them.


//filter the metadata by id and save current section response

//Initialize the page with a default plot
//function init()

//call updateMeta() when a change takes place to the DOM - D3 event handler

// d3.select("body").on("change", updatePage);

//need function for option change

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

// get the data using a forEach loop using the key, value
//    function getMetaData(){
//     var meta_data=d3.select("#selDataset")
//     d3.json("samples.json").then((data)=>{
//         var id =
//     const otu_ids =
//     const otu_labels = 
//     const sample_values =     
        
//         var samples=data.metadata;
        
        
        
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
// //get data and build table
// // function to build table
// function meta_table(id, ethnicity, gender, age, location, bbtype, wfreq){
//     var meta_id=table = d3.select("#selDataset");
//     d3.json("samples.json").then((data)=>{
//         var meta=data.metadata;

//     })
//     var meta = table.select("tbody");
//     //that may be panel-body - from html?
//     var trow;
//     for (var i = 0; i ???)
// }




// //Charts
// function buildCharts(sample) {
//     var colors  = 
//     d3.json("samples.json").then((data)=>{

//     })
// }

// //Build bubble
// var trace1 = {
//     x:otu_ids,
//     y:sample_values,
//     text: otu_labels,

// }
// buildPlot

  