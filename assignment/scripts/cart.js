console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ){
  // Stretch goal
  if ( isFull() ){
    return false;
  } //End of stretch goal
  basket.push( item );
  return true;
}

function listItems(){
  for (item of basket){
    console.log( item ) ;
  }
}

function empty(){
  basket = [];
}
//Stretch goals
const maxItems = 5;

function isFull(){
  //.length shows index so we add 1 to get total elements on basket
  return (basket.length+1) > maxItems ? true : false;
}
//End of stretch goals

//Testing code
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log('Adding watermelons (expect true)', addItem('watermelons'));
console.log('Adding pineapples (expect true)', addItem('pineapples'));
console.log('Adding mangos (expect true)', addItem('mangos'));
console.log('Adding papaya (expect false)', addItem('papaya'));
listItems();
console.log(`Before emptying basket is: ${basket}`);
empty();
console.log(`After emptying basket is: ${basket}`);
