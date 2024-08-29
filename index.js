const array = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];

// De-structure to get 33 & "Moha"
const [
  ,
  ,
  ,
  {
    arr: [, , , [, extracted33 = "33 default value"]],
    obj: { d: extractedMoha = "Moha default value" },
  },
] = array;

console.log(extracted33);
console.log(extractedMoha);

const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];

// this checks duplicates for nested arrays
const hasDuplicates =
  array2.length !== new Set(array2.map(JSON.stringify)).size;

console.log(hasDuplicates);

// this checks duplicates for flat arrays
// const hasDuplicates = array2.length !== new Set(array2).size;
// console.log(hasDuplicates);
