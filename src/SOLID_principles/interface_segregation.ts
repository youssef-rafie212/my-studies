// WRONG WAY (kept in JS code)
// class Printer {
//   constructor() {}

//   print() {}
//   scan() {}
//   fax() {}
// }

// RIGHT WAY
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}
