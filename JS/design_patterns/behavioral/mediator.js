class Member {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  send(message, to) {
    this.chatRoom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
    member.chatRoom = this;
  }

  send(message, from, to) {
    to.receive(message, from);
  }
}

const chatRoom = new ChatRoom();

const member1 = new Member("member1");
const member2 = new Member("member2");
const member3 = new Member("member3");

chatRoom.addMember(member1);
chatRoom.addMember(member2);
chatRoom.addMember(member3);

member1.send("hi member3 how are u doing?", member3);
member3.send("hey member1 im doing fine wbu ?", member1);
member3.send("hello member2", member2);
