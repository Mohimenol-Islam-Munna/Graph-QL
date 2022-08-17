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

  type University {
    name: String
    area: String
    zila: String
    type: String
  }

  type Query {
    name: String
    age: Int
    cgpa: Float
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
