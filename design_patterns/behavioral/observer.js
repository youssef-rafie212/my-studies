class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => {
      if (obs != observer) {
        return obs;
      }
    });
  }

  fire() {
    this.observers.forEach((obs) => {
      obs();
    });
  }
}

const observer1 = () => {
  console.log("observer 1 running");
};

const observer2 = () => {
  console.log("observer 2 running");
};

const subject = new Subject();

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);
subject.fire(); // observer 2 running
