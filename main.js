function eur() {
    let num1 = parseFloat(document.getElementById("bat").value)
    let y = 39.45
    let result = num1 * y
    document.getElementById("result1").innerHTML = result.toFixed(2);
}
// function eur() {
//     let eur1 = document.getElementById("bat");

//     let result1 = document.getElementById("result1");
//     let sum = parseFloat(eur1.value) * parseFloat(10) ;
//     result1.innerHTML = sum;
// }

