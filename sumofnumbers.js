function sumArray(arr) {
    return arr.reduce(function (sum, num) { return sum + num; }, 0);
}
document.getElementById("outputs").innerText = "Sum: " + sumArray([1, 2, 3, 4, 5]);
