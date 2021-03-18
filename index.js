const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFunction) {
 return returnFunction(drivers);
}
