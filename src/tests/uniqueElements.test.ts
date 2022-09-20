import { createTest, TestCase, TestCompletion, TestPreparation } from "simple-test-manager"
import getRandomElements from "../getRandomElements"
import getArrayOfUniqueValues from "../utils/getArrayOfUniqueValues"

const TEST_NAME = 'Is array contains only unique values'
const TEST_TAG = 'getRandomElenets'

/**
 * 
 * @param srcArrLength - длина исходного массива (массив уникальных эл-ов)
 * @param distArrLength - длина массива, получаемого с пом. getRandomElements
 * @return
 */
function unqueValuesTest(srcArrLength: number, distArrLength: number): boolean {
    const src = getArrayOfUniqueValues(srcArrLength);
    const dist = getRandomElements(src, distArrLength);
    const distArrWithoutDuplicates = dist.filter(onlyUnique);
    return (distArrWithoutDuplicates.length == distArrLength);
}

const testCase: TestCase = () => {
    const srcArrLength = 100;
    for(let i = 10; i <= srcArrLength; i+= 10) {
        const testResult = unqueValuesTest(srcArrLength, i);
        if(!testResult) return false;
    }
    return true;
}

const preparation: TestPreparation = () => {

}

const completion: TestCompletion = async () => {
    
}

const exampleTest = createTest({
    name: TEST_NAME,
    tag: TEST_TAG,
    case: testCase,
    preparation,
    completion
});

export default exampleTest;