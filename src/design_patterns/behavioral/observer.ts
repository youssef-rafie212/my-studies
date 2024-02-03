class Subject {
  public observers: Function[] = [];

  subscribe(observer: Function): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function): void {
    this.observers = this.observers.filter((obs) => {
      if (obs != observer) {
        return obs;
      }
    });
  }

  fire(): void {
    this.observers.forEach((obs) => {
      obs();
    });
  }
}

const observer1 = (): void => {
  console.log("observer 1 running");
};

const observer2 = (): void => {
  console.log("observer 2 running");
};

const subject: Subject = new Subject();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.fire();
