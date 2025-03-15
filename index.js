function myList(activities) {
  return ["cook", "clean", "read"];
}

console.log(myList());

function printBook(book) {
  return book;
}
console.log(printBook("Three Little Birds"));

//arrow function
//1 way to do it
const printBookArrow = (book) => {
  console.log(book);
};
console.log("You don't know js");

const saturdayActivities = (activities) => {
  return activities;
};

console.log(saturdayActivities("Do Laundry"));

//2nd way to do it
const toDoList = (activity) => {
  return activity;
};
console.log(toDoList("Go to the Gym"));

//3rd way to do it
const schoolWork = (work) => work;
console.log(schoolWork("Code Challenge"));
