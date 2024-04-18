import { assertEquals } from "./test-framework.js";
import basket from "../src/basket.js";

// ! command for tests:     npm test

// After each test
const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    item = undefined;
    item2 = undefined;
    basket.basketItems = [];
}

// * User Story 1
console.log("Tests for User Story 1:")
console.log("==================================")


console.log("Test 1: Does the length of basketItems increase by 1")
//  Arrange
let item = {};
let item2 = {};
let expected = basket.basketItems.length + 1;
let actual, result;
//  Act
basket.addItem(item);
actual = basket.basketItems.length;
//  Assert
result = assertEquals(actual, expected);
//  Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================")
// Clean Variables
cleanUp();

// Test 2
console.log("Test 2: Does basketItems contain the new item added by addItem()")

// Arrange
item = {};
expected = true;
// Act
basket.addItem(item);
actual = basket.basketItems.includes(item);
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();



// Test 3
console.log("Test 3: Can you add to a basket already containing items using addItem()")

// Arrange
item = {};
item2 = {};
expected = true;
// Act
basket.addItem(item2);
basket.addItem(item);
actual = basket.basketItems.includes(item);
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();



// Test 4
console.log("Test 4: Test that the basket doesn't accept a null item")
// Arrange
item = null;
expected = basket.basketItems.length;

// Act
basket.addItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();


// * User Story 2
console.log("==================================");
console.log("User Story 2 Tests");
console.log("==================================");

// Test 1
console.log("Test 1: Removing an item decreases the basket contents by 1")
// Arrange
item = {};
basket.addItem(item);
expected = basket.basketItems.length - 1;
// Act
basket.removeItem(item);
actual = basket.basketItems.length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();

// Test 2
console.log("Test 2: Check that If multiples items are in the basket, only the item to be removed is removed");

// Arrange
item = {};
basket.addItem(item);
item2 = "bagel";
basket.addItem(item2);
expected = false;

// Act
basket.removeItem(item);
actual = basket.basketItems.includes(item);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();



// Test 3
console.log("Test 3: If the basket contains multiples of the same item type, only 1 is removed");

// Arrange
item = {};
basket.addItem(item);
basket.addItem(item);
expected = basket.basketItems.length - 1;

// Act
basket.removeItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();


// Test 4
console.log("Test 4: Check that we can't remove an item the basket doesn't contain");
// Arrange
item = {};
item2 = "bagel";
basket.addItem(item2);
expected = basket.basketItems.length;

// Act
basket.removeItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();


// Test 4
console.log("Test 5: Check that we can't remove a Null item");
// Arrange
item = null;
item2 = "bagel";
basket.addItem(item2);
expected = basket.basketItems.length;

// Act
basket.removeItem(item);
actual = basket.basketItems.length;

// Assert
result = assertEquals(actual, expected);

// Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("==================================");
// Clean Variables
cleanUp();