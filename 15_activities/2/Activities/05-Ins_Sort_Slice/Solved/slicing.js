// Array of names
var names = ["Jane", "John", "Jimbo", "Jedediah"];

// Slice the first two names
//starting position and number of elements  -- so starting at 0 and getting 2 elements
var left = names.slice(0, 2);

// Returns elements at index position 0 and 1, but not 2.
console.log(left);

// Slice the last two names
var right = names.slice(2, 4);
// Returns elements at index position 2 and 3, but not 4. -- here starting at 2 and getting 4, but there are not 4 to get so going outside of data
console.log(right);

//slicing in json, but this is similar to python slicing