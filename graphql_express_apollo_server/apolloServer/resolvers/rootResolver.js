const Student = require("../../models/student");

const rootResolver = {
  Query: {
    student: () => {
      return {
        name: "Md Mohimenol Islam Munna 33",
        age: 26,
        university: {},
      };
    },
  },

  Mutation: {
    createStudent: async (parent, args, context, info) => {
      const { name, age, cgpa, uName, uArea, uZila, uType } = args.inputStudent;

      console.log("args.inputStudent:", args.inputStudent);

      const student = new Student({
        name: name,
        age: age,
        cgpa: cgpa,
        university: {
          uName: uName,
          uArea: uArea,
          uZila: uZila,
          uType: uType,
        },
      });

      try {
        const res = await student.save();
        console.log("saved student success:", res);
        return res;
      } catch (err) {
        console.log("saved student err :", err);
        return null;
      }
    },
  },
};

module.exports = rootResolver;
