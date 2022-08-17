const rootResolver = {
  Query: {
    hello: () => {
      return "hello graphql world!";
    },
    name: () => {
      return "Md Mohimenol Islam Munna";
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
  },

  Mutation: {
    addStudent: ({ id, name, className, gender }) => {
      console.log("id", id);
      console.log("name", name);
      console.log("className", className);
      students.push({
        id: id,
        name: name,
        className: className,
        gender: gender,
      });
      return students;
    },
  },
};

module.exports = rootResolver;
