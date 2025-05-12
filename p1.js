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