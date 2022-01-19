function demo(speed, area) {

    let speedLimit = 0;

    switch (area) {
        case 'motorway': speedLimit = 130;
            break;
        case 'interstate': speedLimit = 90;
            break;
        case 'city': speedLimit = 50;
            break;
        case 'residential': speedLimit = 20;
            break;
    }

    let speedingSpeed = 0;
    let speedingType = '';

    if (speed > speedLimit) {
        speedingSpeed = speed - speedLimit
    }
    if (speedingSpeed <= 20) {
        speedingType = 'speeding'
    } else if (speedingSpeed <= 40) {
        speedingType = 'excessive speeding'
    } else {
        speedingType = 'reckless driving'
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speedingSpeed} km/h faster than the allowed speed of ${speedLimit} - ${speedingType}`);
    }
}