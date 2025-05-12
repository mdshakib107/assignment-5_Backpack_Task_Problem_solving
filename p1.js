/* 1.Task: Array Filtering and Mapping
 Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const people = [
  { name: "Alia", age: 25, gender: "female" },
  { name: "Boby", age: 30, gender: "male" },
  { name: "Chanky", age: 28, gender: "male" },
  { name: "Gamdhi", age: 28, gender: "Not To say" },
  { name: "Dina", age: 22, gender: "female" }
];

function filterAndMap(people) {
  return people
    .filter(person => person.gender !== "female")
    .map(person => person.name);
}

console.log(filterAndMap(people));