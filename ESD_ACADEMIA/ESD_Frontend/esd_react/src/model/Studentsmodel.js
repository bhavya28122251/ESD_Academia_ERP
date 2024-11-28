
class Student {
  constructor(rollNumber, firstName, lastName, email) {
    this.rollNumber = rollNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Student;
