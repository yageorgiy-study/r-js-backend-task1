import getRandomElements from "./getRandomElements";
import Table from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 5);
console.log(result);

/* Custom tests */
console.log(getRandomElements(getArrayOfUniqueValues(1), 1));
console.log(getRandomElements(getArrayOfUniqueValues(6), 1));
console.log(getRandomElements(getArrayOfUniqueValues(10), 6));
console.log(getRandomElements(getArrayOfUniqueValues(2), 3));
console.log(getRandomElements(getArrayOfUniqueValues(10), 30));
console.log(getRandomElements(getArrayOfUniqueValues(1), -1));


//********************************************************************* 

const table = new Table();
table.print();