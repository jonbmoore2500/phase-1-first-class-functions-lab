// Code your solution in this file!

const returnFirstTwoDrivers = (function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
});

const returnLastTwoDrivers = (function(arrayOfDrivers) {
    return arrayOfDrivers.slice(2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(5);

/*
function selectDifferentDrivers(arrayOfDrivers, something) {
    return something(arrayOfDrivers);
}
*/

function selectDifferentDrivers(arrayOfDrivers, something) {
    if (something === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0, 2)
    } else if (something === returnLastTwoDrivers) {
        return arrayOfDrivers.slice(2)
    }
}


