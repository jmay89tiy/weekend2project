// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

var avg = 0
var sum = 0
function question1 () {
  for (let i =0; i < data.length; i++) {
    sum = sum + data[i].price;
  }
avg = sum / data.length;
console.log("the average price is $" + Math.round(avg *100) / 100);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
let arr =[]
function question2 () {
  for (i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <=18) {
      arr.push(data[i].title);
    }

  // Answer:
}
console.log(arr);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (i =0; i < data.length; i++) {
    if (data[i].currency_code === "GBP"){
    console.log(data[i].title + " costs " + data[i].price + " pounds");
    }
  }

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  for(i =0; i < data.length; i++) {
      for (k =0; k <data[i].materials.length; k++) {
        if (data[i].materials[k] === "wood"){
          console.log(data[i].title + " is made of wood");
        }
      }
    }
  }

  // Answer:



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
for (i =0; i < data.length; i++){
  if(data[i].materials.length >= 8){
    console.log(data[i].title + " " + "has " + data[i].materials.length + " materials");
      for (k =0; k < data[i].materials.length; k++) {
      console.log("-" + data[i].materials[k])
    }
}
}
}



// 6: How many items were made by their sellers?
// Answer:


function question6 () {
  sum = 0;
  for (i =0; i < data.length; i++){
    if(data[i].who_made === "i_did"){
      sum = sum + 1;
    }

  // Answer:
}
console.log(sum + " items were made by their sellers");
}
