import testManager from "simple-test-manager";
import exampleTest from "./simpleTest.test";

testManager.addTests([
    exampleTest
]);

testManager.runAllTests();