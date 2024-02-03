// WRONG WAY (kept in JS code)
// class UserService {
//   constructor() {
//       this.userRepository = new MongoDBUserRepository();
//   }

//   saveUser(user) {
//       this.userRepository.save(user);
//   }
// }

// class MongoDBUserRepository {
//   save(user) {
//       // Save user to MongoDB
//   }
// }

// const userService = new UserService();

// RIGHT WAY
abstract class UserRepository {
  abstract save(user: string): void;
}

class MongoDBUserRepository extends UserRepository {
  save(user: string): void {
    console.log(`${user} has been saved using MongoDB`);
  }
}

class UserService {
  constructor(private userRepository: UserRepository) {}

  saveUser(user: string): void {
    this.userRepository.save(user);
  }
}

const userRepository: MongoDBUserRepository = new MongoDBUserRepository();
const userService: UserService = new UserService(userRepository);

userService.saveUser("youssef");
