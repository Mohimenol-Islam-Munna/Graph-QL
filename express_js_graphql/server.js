const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const students = require("./students.json");

const app = express();

// build graphql schema
const schema = buildSchema(`

    type Student {
        id: ID,
        name: String,
        className: String,
    }

    type Campus {
        name: String,
        u_type: [String]

    }

    type University {
        info: Campus,
        area: String,
        zila: String
    }

    type Query {
        hello: String,
        name: String,
        age: Int,
        cgpa: Float,
        students: [Student],
        student(id: ID): Student,
        university: University
    }
`);

// resolver
const root = {
  hello: () => {
    return "hello graphql world!";
  },
  name: () => {
    return "Name query go";
  },
  age: () => {
    return 26;
  },
  cgpa: () => {
    return 3.33;
  },

  students: () => {
    return students;
  },

  student: ({ id }) => {
    const singleStudent = students.find((item) => item.id == id);
    return singleStudent;
  },

  university: () => {
    return {
      area: "30 ekor",
      zila: "Pabna",
      info: {
        name: "PUST",
        u_type: ["Public University", "science and technology"],
      },
    };
  },
};

// connect graphql server to express js
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = "8085";
app.listen(PORT, () => {
  console.log(`Your server is running at PORT ${PORT} ...`);
});
