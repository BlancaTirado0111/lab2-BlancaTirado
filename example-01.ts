function sumOfTwoNumbres( FirstNumber: number, SecondNumber: number ): number{
    return FirstNumber + SecondNumber;
}

const numberA: number = 5;
const numberB: number = 15;

const result = sumOfTwoNumbres( numberA, numberB );
console.log(`The sum of values (${numberA},${numberB}) is: ${result}`);
