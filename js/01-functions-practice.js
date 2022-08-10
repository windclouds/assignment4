//STEP 1
function halfNumber(num) {
    return num/2
}
//STEP 2
function squareNumber(num) {
    return num * num
}
//STEP 3
function percentOf(num1, num2) {
    return (num1/num2*100)
}
//STEP 4
function findModulus(num1, num2) {
    return num1 % num2
}
//STEP 5
function sum(argument) {
    
}
let numVar1 = Number(prompt("Please input the first number:"))
let numVar2 = Number(prompt("Please input the second number:"))
console.log(`Half of ${numVar1} is ${halfNumber(numVar1)} and Half of ${numVar2} is ${halfNumber(numVar2)} .`)
console.log(`The result of squaring the number ${numVar1} is ${squareNumber(numVar1)} and the result of squaring the number ${numVar2} is ${squareNumber(numVar2)}.`)
console.log(`${numVar1} is ${parseInt(percentOf(numVar1, numVar2))}% of ${numVar2}.`)
console.log(`${findModulus(numVar1, numVar2)} is the modulus of ${numVar1} and ${numVar2}.`)