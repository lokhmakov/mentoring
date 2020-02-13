// https://stackoverflow.com/questions/51954558/how-can-i-remove-a-wider-type-from-a-union-type-without-removing-its-subtypes-in/51955852#51955852

// type Item = {
//   reserved: {
//     b: string
//   }
// } & Omit<
//   {
//     [key: string]: {
//       a: string
//     }
//   },
//   'reserved'
// >

// interface First {
//   a: string
//   b: string
// }

// interface Second {
//   reserved: number
// }

// type Third = Omit<First, keyof Second> & Second
// type Item = Omit<Third, keyof Second>

// const o: Third = {
//   a: `123`,
//   reserved: 555,
//   b: `456`
// }

// console.log(o)
