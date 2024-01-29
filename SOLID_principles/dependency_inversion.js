// WRONG WAY
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
class UserRepository {
  save(user) {
    throw new Error("Method not implemented");
  }
}

class MongoDBUserRepository extends UserRepository {
  save(user) {
    // Save user to MongoDB
  }
}

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository; 
  }

  saveUser(user) {
    this.userRepository.save(user);
  }
}

const userRepository = new MongoDBUserRepository();
const userService = new UserService(userRepository);
