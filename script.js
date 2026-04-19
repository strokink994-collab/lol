// Функция нахождения наибольшего общего делителя (НОД)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Функция сокращения дроби
function reduceFraction(numerator, denominator) {
    const gcdValue = gcd(Math.abs(numerator), Math.abs(denominator));
    return [numerator / gcdValue, denominator / gcdValue];
}

// Основная функция вычисления
function calculate() {
    // Получаем значения из полей ввода
    const num1 = parseInt(document.getElementById('num1').value);
    const den1 = parseInt(document.getElementById('den1').value);
    const num2 = parseInt(document.getElementById('num2').value);
