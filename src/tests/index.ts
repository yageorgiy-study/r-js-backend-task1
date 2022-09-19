import testManager from "simple-test-manager";
import exampleTest from "./simpleTest";

testManager.addTests([
    exampleTest
]);

testManager.runAllTests();