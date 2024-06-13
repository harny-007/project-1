function add(a ,b ,c ,d) {
    return a + b + c + d
}

function del(a ,b ,c ,d) {
    return a - b - c - d
}

function jel(a ,b ,c ,d) {
    return a * b * c * d
}

function hall(a ,b ,c ,d) {
    return a / b / c / d
}

function pass(a ,b ,c ,d) {
    return a % b % c % d
}

function pass1(a ,b ,c ,d) {
    return a ** b ** c ** d
}

let sum = add (11 ,5 ,7 ,10)
let sum1 = del (11 ,5 ,7 ,10)
let sum2 = jel (11 ,5 ,7 ,10)
let sum3 = hall (11 ,5 ,7 ,10)
let sum4 = pass (11 ,5 ,7 ,10)
let sum5 = pass1 (11 ,5 ,7 ,10)

console.log(sum)
document.write(" a + b + c + d : " + sum )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum)
document.write("<hr>")

console.log(sum1)
document.write(" a - b - c - d : " + sum1 )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum1)
document.write("<hr>")

console.log(sum2)
document.write(" a x b x c x d : " + sum2 )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum2)
document.write("<hr>")

console.log(sum3)
document.write(" a ÷ b ÷ c ÷ d : " + sum3 )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum3)
document.write("<hr>")

console.log(sum4)
document.write(" a % b % c % d : " + sum4 )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum4)
document.write("<hr>")

console.log(sum5)
document.write(" a ^ b ^ c ^ d : " + sum5 )
document.write("<p>")
document.write(" ผลรวมเท่ากับ " + sum5)
document.write("<hr>")

document.getElementById("a1").innerHTML = sum5;

function cal() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) + parseInt(num2.value) ;
    result.innerHTML = sum;
}

function cal1() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) - parseInt(num2.value) ;
    result.innerHTML = sum;
}

function cal2() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) * parseInt(num2.value) ;
    result.innerHTML = sum;
}

function cal3() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) / parseInt(num2.value) ;
    result.innerHTML = sum;
}

function cal4() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) % parseInt(num2.value) ;
    result.innerHTML = sum;
}

function cal5() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("result");
    let sum = parseFloat(num1.value) ** parseInt(num2.value) ;
    result.innerHTML = sum;
}
