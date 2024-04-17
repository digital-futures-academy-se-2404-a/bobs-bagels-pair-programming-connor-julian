import { assertEquals, assertTrue, assertFalse, searchArray } from "./test-framework.js";
import { addItem } from "./index.js"


// * User Story 1

//Test 1: Add items to basket

// Arrange
const testItem1 = "Bagel";
const testBasket1 = [];

let actual1, result1;

//Act
actual1 = addItem(testItem1, testBasket1);

//Assert
result1 = searchArray(actual1, "Bagel");

//Report
console.log(`Test 1 Result: ${result1}`);