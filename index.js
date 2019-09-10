function wakeDog (dogName, dogBreed) {
    const activityString = `Wake ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

function leashDog (dogName, dogBreed) {
    const activityString = `Leash ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

function walkToPark (dogName, dogBreed) {
    const activityString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

function throwFrisbee (dogName, dogBreed) {
    const activityString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

function walkHome (dogName, dogBreed) {
    const activityString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

function unleashDog (dogName, dogBreed) {
    const activityString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(activityString);
    return activityString;
}

const routine = [wakeDog, leashDog, walkToPark, 
    throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let fnResult = []
    for (let i = 0; i < routine.length; i++) {
        fnResult.push(routine[i](dogName, dogBreed));
    }
    return fnResult;
}