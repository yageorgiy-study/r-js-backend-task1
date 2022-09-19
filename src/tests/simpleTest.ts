import { createTest, TestCase, TestCompletion, TestPreparation } from "simple-test-manager"

const TEST_NAME = 'Example name'
const TEST_TAG = 'Example tag'


const testCase: TestCase = () => {
    return true
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