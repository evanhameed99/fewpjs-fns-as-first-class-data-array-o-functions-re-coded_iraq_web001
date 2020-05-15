
function wakeDog(dogName,dogBreed){

console.log(`Wake ${dogName} the ${dogBreed}`);
let message = `Wake ${dogName} the ${dogBreed}`;
return message;
}
function leashDog(dogName,dogBreed){

console.log(`Leash ${dogName} the ${dogBreed}`);
let message = `Leash ${dogName} the ${dogBreed}`;
return message;

}
function walkToPark(dogName,dogBreed){

console.log(`Walk to park with ${dogName} the ${dogBreed}`);
let message = `Walk to park with ${dogName} the ${dogBreed}`;
return message;

}
function throwFrisbee(dogName,dogBreed){

console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
 let message=`Throw the frisbee for ${dogName} the ${dogBreed}`;
 return message;

}
function walkHome(dogName,dogBreed){

console.log(`Walk home with ${dogName} the ${dogBreed}`);
let message = `Walk home with ${dogName} the ${dogBreed}`;
return message;

}
function unleashDog(dogName,dogBreed){

console.log(`Unleash ${dogName} the ${dogBreed}`);
let message=`Unleash ${dogName} the ${dogBreed}`;
return message;

}

let routine = [wakeDog(),leashDog(),walkToPark(),throwFrisbee(),walkHome(),unleashDog()] ;

function exerciseDog(dogName, dogBreed){
let resultArray=[];
for(let i=0;i<routine.length-1;i++){

 resultArray+=routine[i](dogName,dogBreed);
}
  return resultArray;
}
