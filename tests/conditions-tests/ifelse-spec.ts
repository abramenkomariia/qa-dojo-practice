import { test, expect } from "@playwright/test";

// Сценарій: Напишіть програму, яка перевіряє, парне чи непарне число.

function numberOddness(number) {
    if (number % 2 === 0){
        console.log('Число парне')
    } 
    else {
        console.log('Число не парне')
     }
} 

numberOddness(675645);

// Сценарій: Напишіть програму для визначення більшого з двох чисел.

function greaterNum(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number" ) {
        if (number1 > number2){
            console.log(number1, 'більше ніж', number2 )
        } 
        else {
            console.log(number2, 'більше ніж', number1 )
        }
    }
    else {
        throw Error("pls use number");
    }
} 

greaterNum(100, 5); 


// Вправа №3
//Написати під це ці програми юніт тести

// Класи еквівалентності
// positive
// negative
// zero

// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність

// test("is positive", async () => {
//     const result = numberOddness(1);
//     expect(result).toBeTruthy();
//   });
  
//   test("is positive - max value", async () => {
//     const result = numberOddness(1.7976931348623157e308);
//     expect(result).toBeTruthy();
//   });
  
//   test("is negative", async () => {
//     const result = isPositive(-1);
//     expect(result).toBeFalsy();
//   });
  
//   test("is negative - min value", async () => {
//     const result = isPositive(-1.7976931348623157e308);
//     expect(result).toBeFalsy();
//   });