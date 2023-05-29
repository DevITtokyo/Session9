let number= + prompt ("Nhập vào một số có 3 chữ số");
let thirdNumber= number%10;
let secondNumber= Math.floor((number%100)/10);
let firstNumber= Math.floor(number / 100);
let result = thirdNumber * 100 + secondNumber * 10 + firstNumber;
document.write('Số ngược lại là : '+result);
