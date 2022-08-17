const { gql } = require("apollo-server-express");

const studentTypeDefs = gql`
  enum GENDER {
    Male
    Female
    Others
  }

  type University {
    uName: String
    uArea: String
    uZila: String
    uType: String
  }

  type Student {
    id: ID
    name: String
    age: Float
    cgpa: Float
    gender: GENDER
    university: University
  }

  input CreateStudent {
    name: String
    age: Float
    cgpa: Float
    gender: GENDER
    uName: String
    uArea: String
    uZila: String
    uType: String
  }

  type Query {
    student(id: ID!): Student
    students: [Student]
  }

  type Mutation {
    createStudent(inputStudent: CreateStudent): Student
    updateStudent(id: ID!, inputStudent: CreateStudent): Student
    deleteStudent(id: ID!): String
  }
`;

module.exports = studentTypeDefs;
