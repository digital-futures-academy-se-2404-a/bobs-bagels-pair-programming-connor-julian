import { assertEquals } from "./test-framework.js";
import Basket from "./basket-class.js"
import Item from "./item-class.js";
// ! command for tests:     npm test

// Initiate objects for tests
let item = new Item("Bagel");
let item2 = new Item("Donut");
let testBasket = new Basket();

let expected, actual, result;

// After each test
const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    item = undefined;
    item2 = undefined;
    testBasket = undefined;
}

// * User Story 1
console.log("Tests for User Story 1:")
console.log("==================================")

// Test 1
console.log("Test 1: Does the length of basketItems increase by 1")
//  Arrange
item = new Item("Bagel");
testBasket = new Basket();
expected = testBasket.getItemCount() + 1;
//  Act
testBasket.addItem(item);
actual = testBasket.getItemCount(); //return basketItems.length()
//  Assert
result = assertEquals(actual, expected);
//  Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================")
// Clean Variables
cleanUp();


// Test 2
console.log("Test 2: When adding an item to the basket, it cannot exceed the baskets max capacity");
// Arrange
item = new Item("Bagel");
item2 = new Item("Swiss Roll");
testBasket = new Basket();
testBasket.addItem(item);
expected = testBasket.getItemCount();
testBasket.setCapacity(1); // ?Set capacity to 1
// Act
testBasket.addItem(item2); // ?Attempt to add 2nd item over capacity
actual = testBasket.getItemCount(); // ?return current item count
// Assert
result = assertEquals(actual, expected);
//  Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================")
// Clean Variables
cleanUp();

// Test 3
console.log("Test 3: Setting the capacity below the number of items in the basket fails and reports an error")

// Arrange
item = new Item("Bagel");
item2 = new Item("Swiss Roll");
testBasket = new Basket();
testBasket.addItem(item);
testBasket.addItem(item2);
expected = testBasket.getCapacity();
// Act
testBasket.setCapacity(1);
actual = testBasket.getCapacity();
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================")
// Clean Variables
cleanUp();