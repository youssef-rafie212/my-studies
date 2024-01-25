const arr = ["john", 21, true, 12.4];

// from start to end iterator
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }

  iterate() {
    while (this.hasNext()) {
      console.log(this.next());
    }
  }
}

const iterator = new Iterator(arr);
iterator.iterate();
