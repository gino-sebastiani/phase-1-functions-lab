function distanceFromHqInBlocks(block){
    if (block > 42)
    return block - 42
    if (block < 42)
    return 42 - block
}

function distanceFromHqInFeet(block){
    let distanceInFeet = distanceFromHqInBlocks(block) * 264;
    return distanceInFeet
}

function distanceTravelledInFeet(start,destination){
    if (start < destination)
    return (destination - start) * 264;
    if (destination < start)
    return (start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let feetTraveled = distanceTravelledInFeet(start, destination)
    
    console.log (feetTraveled)
    if (feetTraveled < 400){
        return 0
    } else if (feetTraveled < 2000){
        return (feetTraveled - 400) * .02;
    } else if (feetTraveled < 2500){
        return 25;
    } else{
        return "cannot travel that far";
    }
}