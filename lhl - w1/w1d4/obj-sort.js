var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 3, name: "alex",     age: 03 },
  { id: 2, name: "zoidberg", age: 67 },
  { id: 2, name: "zoidberg", age: 5 }
];

function compareStr(s1, s2) {
  if (s1 === s2) return 0;
  return ( s1 < s2 ? -1 : 1 )
}

function compareFn(a, b) {
  var stringTest = compareStr(a.name, b.name);
  var ageTest = a.age - b.age;

  return stringTest || ageTest;

}

console.log(students.sort(compareFn))