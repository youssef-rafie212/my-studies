class Member {
  constructor(public name: string) {}

  public chatRoom: ChatRoom | null = null;

  send(message: string, to: Member): void {
    this.chatRoom!.send(message, this, to);
  }

  receive(message: string, from: Member): void {
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
}

class ChatRoom {
  public members: Member[] = [];

  addMember(member: Member): void {
    this.members.push(member);
    member.chatRoom = this;
  }

  send(message: string, from: Member, to: Member) {
    to.receive(message, from);
  }
}

const chatRoom: ChatRoom = new ChatRoom();

const member1: Member = new Member("member1");
const member2: Member = new Member("member2");
const member3: Member = new Member("member3");

chatRoom.addMember(member1);
chatRoom.addMember(member2);
chatRoom.addMember(member3);

member1.send("hi member3 how are u doing?", member3);
member3.send("hey member1 im doing fine wbu ?", member1);
member3.send("hello member2", member2);
