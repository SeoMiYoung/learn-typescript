// filter에 대해 학습해보자
let students = [
  { name: 'Sarah', age: 23 },
  { name: 'John', age: 26 },
  { name: 'Kelly', age: 29 },
  { name: 'Ben', age: 33 },
];

let filtered = students.filter(function (item) {
  console.log(item.age);
  return item.age;
});

console.log(filtered);
