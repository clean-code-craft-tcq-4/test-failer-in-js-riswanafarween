const {expect} = require('chai');
let alertFailureCount = 0;
let threshold = 100;
let failureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    if (celcius <= threshold) {
        return 200;
    } else {
        failureCount += 1;
        return 500;
    }
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }
}

alertInCelcius(400.5);
alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
expect(failureCount).equals(alertFailureCount);
