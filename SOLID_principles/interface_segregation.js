// Note : using classes here instead of interfaces as JS doesn't support interfaces
// WRONG WAY
// class Printer {
//   constructor() {}

//   print() {}
//   scan() {}
//   fax() {}
// }

// RIGHT WAY
class Printer {
  constructor() {}
  print() {}
}

class Scanner {
  constructor() {}
  scan() {}
}

class Fax {
  constructor() {}
  fax() {}
}
