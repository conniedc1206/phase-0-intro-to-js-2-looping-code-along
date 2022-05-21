//define a function called writeCards()
//accepts two arguments: an array of string names and an event name
//create for loop
//create a new, empty array to hold the messages;
    //iterate through the input array and, inside the loop
    //build out the 'thank you' message for each name using string interpolation
    //then add that message to the new array you created;
//after the loop finishes and all of the messages have been added to the new array, return the new array.
function writeCards(names, event) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

//define a function named countDown
//parameter: positive integer
//starting with that number, counts down to zero using console.log()

function countDown(int) {
    let i = int;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return int;
}