alert('Hi, that is calculator online!')

let sign = prompt('Please provide some sign, for example *, /, -, + ');

let firstNumber = +prompt('Please provide first digit');

let secondNumber = +prompt('Please provide second number');

let sumery = firstNumber + sign + secondNumber;

    switch (sign) {
        case `*`:
            result = firstNumber * secondNumber;
            break;
        case `/`:
            result = firstNumber / secondNumber;
            break;
        case `-`:
            result = firstNumber - secondNumber;
            break;
        case `+`:
            result = firstNumber + secondNumber;
            break;
        default:
            console.log(`Something is going wrong`);
    }


    alert(`${firstNumber} ${sign} ${secondNumber} = ${sumery}`)

