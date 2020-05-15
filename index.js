
function wakeDog(dogName,dogBreed){

console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName,dogBreed){

console.log(`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName,dogBreed){

console.log(`Walk to park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName,dogBreed){

console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName,dogBreed){

console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName,dogBreed){

console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog(),leashDog(),walkToPark(),throwFrisbee(),walkHome(),unleashDog()] ;

function exerciseDog(dogName, dogBreed){
let resultArray=[];
for(let i=0;i<routine.length-1;i++){

 resultArray+=routine[i](dogName,dogBreed);
}
  return resultArray;
}
