const arr: (string | number)[] = ["john", 21, 12.4];

// from start to end iterator
class Iterator<T> {
  constructor(public items: T[]) {}
  public index: number = 0;

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): T {
    return this.items[this.index++];
  }

  iterate(): void {
    while (this.hasNext()) {
      console.log(this.next());
    }
  }
}

const iterator: Iterator<string | number> = new Iterator(arr);
iterator.iterate();
