console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ){
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

console.log('Adding apples (expect true)', addItem('apples'));
listItems();
console.log('Adding apples (expect true)', addItem('bananas'));
listItems();
console.log('Adding apples (expect true)', addItem('watermelons'));
console.log(`Before emptying basket is: ${basket}`);
empty();
console.log(`After emptying basket is: ${basket}`);
