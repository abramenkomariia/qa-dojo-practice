//1
let max = 0;

while (max < 345) {
    console.log(max)
    max++;
}



//2
let sum = 0;
let i = 0;

while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log(sum);


//3

let j = 241;
do {
  console.log(j);
  j--;
} while (j > 0);

// Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

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