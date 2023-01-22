// Code your solution in this file!


const scuberDrivers = ["Jack", "John", "Andrew", "Tom"];

const returnFirstTwoDrivers = function(scuberDrivers){
    return scuberDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(scuberDrivers){
    
    return scuberDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyRate){
    return function(fare){
        const newFare = fare * multiplyRate;
        return newFare; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(scuberDrivers, firstOrLastTwo){
    return firstOrLastTwo(scuberDrivers);
}
