/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2);
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2);

console.log('Small pizza area: ', smallPizzaArea);
console.log('Large pizza area: ', largePizzaArea);

// 2. What is the cost per square inch of each pizza?
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

const smallPizzaCostPerSquareInch = smallPizzaArea / SMALL_PIZZA_PRICE;
const largePizzaCostPerSquareInch = largePizzaArea / LARGE_PIZZA_PRICE;

console.log('Small pizza cost per sq inch: ', smallPizzaCostPerSquareInch);
console.log('Large pizza cost per sq inch: ', largePizzaCostPerSquareInch);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
function drawCard() {
    const card = Math.floor(Math.random() * 13) + 1;
    return card;
}

// 4. Draw 3 cards and use Math to determine the highest
// card
const cardOne = drawCard();
const cardTwo = drawCard();
const cardThree = drawCard();

const highestCard = Math.max(cardOne, cardTwo, cardThree);

console.log('Highest card: ', highestCard);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
function printAddress(firstName, lastName, streetAddress, city, state, zipcode){
    return (
`${firstName} ${lastName}
${streetAddress} 
${city}, ${state} ${zipcode}`
    )
}

console.log(printAddress('John', 'Doe', '1234 5th Ave', 'Seattle', 'WA', '12345'));

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
function extractFirstName(address){
    const firstSpace = address.indexOf(' ')
    return address.substring(0, firstSpace);
}

const address = `John Doe
1234 5th Ave
Seattle, WA 12345`;
console.log(extractFirstName(address));


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

const middleDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
console.log(middleDate);
