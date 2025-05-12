/*2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.*/

const books = [
  { title: "Atomic Habits", author: "James Clear", year: 2001 },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", year: 2005 },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 2010 },
  { title: "Mindset", author: "Carol Dweck", year: 2010 }
];

function getTitles(books) {
  return books.map(book => book.title);
}

console.log(getTitles(books));
