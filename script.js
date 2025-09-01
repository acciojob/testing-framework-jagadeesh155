//your JS code here. If required.
// your JS code here. If required.

function expect(actual) {
  return {
    toExist: function () {
      if (actual === null || actual === undefined) {
        throw `expected value to exist but got ${JSON.stringify(actual)}`;
      }
    },
    toBe: function (expected) {
      if (actual !== expected) {
        throw `expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`;
      }
    },
    toBeType: function (type) {
      const actualType = typeof actual;
      if (actualType !== type) {
        throw `expected ${JSON.stringify(actual)} to be of type ${type} but got ${actualType}`;
      }
    }
  };
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);
  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (error) {
    throw { testCaseName, errorMessage: error };
  }
}

function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`);
  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (err) {
    console.error(
      `failed running test suite ${testSuiteName} on test case ${err.testCaseName} with error message ${err.errorMessage}`
    );
  }
}
