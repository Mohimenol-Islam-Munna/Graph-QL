const { gql } = require("apollo-server-express");

const studentTypeDefs = gql`
  enum GENDER {
    Male
    Female
    Others
  }

  type Student {
    id: ID
    name: String
    className: String
    gender: GENDER
  }

  type Campus {
    name: String
    u_type: [String]
  }

  type University {
    info: Campus
    area: String
    zila: String
  }

  type Query {
    hello: String
    name: String
    age: Int
    cgpa: Float
    students: [Student]
    student(id: ID): Student
    university: University
  }

  type Mutation {
    addStudent(
      id: ID
      name: String
      className: String
      gender: GENDER
    ): [Student]
  }
`;

module.exports = studentTypeDefs;
