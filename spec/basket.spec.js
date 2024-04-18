import { assertEquals } from "./test-framework.js";
import basket from "../src/basket.js";

// ! command for tests:     npm test

// After each test
const cleanUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    item = undefined;
    basket.basketItems = [];
}

// * User Story 1
console.log("Tests for User Story 1:")
console.log("==================================")


console.log("Test 1: Add 1 item to a basket using addItem")
//  Arrange
let item = {};
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


console.log("Test 2: Check that item added using addItem() was the item to be added")

