const Student = require("../../models/student");

const rootResolver = {
  Query: {
    name: () => {
      return "Md Mohimenol Islam Munna";
    },
    age: () => {
      return 26;
    },
    cgpa: () => {
      return 3.33;
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
