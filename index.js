module.exports = {
    findMaxOfTwo: (number1, number2) => {
        let max;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            throw new Error('Incompatible types: Arguments contains non numeric values');
        }
        else {
            if (number1 > number2) {
                max = number1;
            }
            else {
                max = number2;
            }
            return max;
        }
    },
    findMinOfTwo: (number1, number2) => {
        let min;
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            throw new Error('Incompatible types: Arguments contains non numeric values');
        }
        else {
            if (number1 < number2) {
                min = number1;
            }
            else {
                min = number2;
            }
            return min;
        }
    },
    sortArray: (array) => {
        if (!Array.isArray(array)) {
            throw new Error('Incompatible type: Argument is not an array');
        }
        else {
            for (let i = 0; i < array.length; i++){
                for (let j = 1; j < array.length-i; j++){
                    if (array[j-1] > array[j])
                    {
                        let temp = array[j-1];
                        array[j-1] = array[j];
                        array[j] = temp;
                    }
                }
            }
            return JSON.stringify(arr);
        }
    },
    findMaxOfArray: (array) => {
        if (!Array.isArray(array)) {
            throw new Error('Incompatible type: Argument is not an array');
        }
        else {
            let max = array[0];
            for(let i =0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
                else {
                    continue;
                }
            }
            return max;
        }
    },
    findMinOfArray: (array) => {
        if (!Array.isArray(array)) {
            throw new Error('Incompatible type: Argument is not an array');
        }
        else {
            let min = array[0];
            for(let i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
                else {
                    continue;
                }
            }
            return min;
        }
    },
    findFactorial: (number) => {
        if (typeof number !== 'number') {
            throw new Error('Incompatible type: Argument is not a number');
        }
        else {
            let factorial = 1;
            for (let i = 1; i <= number; i++) {
                factorial = factorial * i;
            }
            return factorial;
        }
    },
    isPrimeNumber: (number) => {
        if (typeof number !== 'number') {
            throw new Error('Incompatible type: Argument is not a number');
        }
        else {
            let n = number/2;
            let flag = 0;
            let isPrime = false;
            if (number === 0 || number === 1) {
                isPrime = false
            }
            else {
                for (let i = 2; i <= n; i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        flag = 1;
                        break;
                    }
                }
                if (flag === 0) {
                    isPrime = true;
                }
            }
            return isPrime;
        }
    },
    isArmstrongNumber: (number) => {
        if (typeof number !== 'number') {
            throw new Error('Incompatible type: Argument is not a number');
        }
        else {
            let original = number;
            let sum = 0;
            let digits = 0;
            while(number > 0){
                digits = digits + 1;
                number = parseInt(number/10);
            }
            number = original;
            while (number > 0){
                let remainder = parseInt(number%10);
                sum = sum + Math.pow(remainder, digits);
                number = parseInt(number/10);
            }
            if (sum === original) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    isPalindromeNumber: (number) => {
        if (typeof number !== 'number') {
            throw new Error('Incompatible type: Argument is not a number');
        }
        else {
            let original = number;
            let sum = 0;
            while (number > 0){
                let num = parseInt(number%10);
                sum = (sum*10) + num;
                number = parseInt(number/10);
            }
            if (sum === original) {
                return true;
            }
            else {
                return false;
            }
        }
    }

}