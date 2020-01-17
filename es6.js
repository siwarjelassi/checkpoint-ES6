let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = pet =>{return new date().getFullYear()- pet.bornOn}

const petsWithAge = pets.map(function(pet){
  pet.age = getAge(pet);

  petsWithAge.push(pet);
})
console.log(petsWithAge);

const dogs = pets.filter(function(pet){
  if (pet.type === "dog") {
    dogs.push(pet);
  }
});
console.log(dogs);


const jasper=pets.find(function(pet){
  if (pet.name === "Jasper") {
    jasper = pet;
  }
});

console.log(`Jasper is  + ${jasper.age}  +  years old `);