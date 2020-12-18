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
           var samples=data.names;
           console.log(samples);
           samples.forEach((sample)=>{
               dropdown_id.append("option")
               .text(sample)
               .property("value", sample);
           });
           var firstsample=samples[0];

         })
   }
   drop_menu();

//Meta data
   //this comes from an array of objects so I use index??
   function meta(){
    var meta_id=d3.select("#selDataset")
    d3.json("samples.json").then((data)=>{
        var samples=data.metadata;
        console.log(samples);
        samples.forEach((sample)=>{
            meta_id.append("option")
            .text(sample)
            .property("value", sample);
        });
        var firstsample=samples[0];

      })
}
drop_menu();
//Charts
  