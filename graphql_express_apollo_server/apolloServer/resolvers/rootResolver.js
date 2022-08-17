const Student = require("../../models/student");

const rootResolver = {
  Query: {
    students: async () => {
      try {
        const result = await Student.find();
        return result;
      } catch (err) {
        console.log("all student fetch err ::", err);
        return null;
      }
    },

    student: async (parent, args, context, info) => {
      try {
        const result = await Student.findById(args.id);
        return result;
      } catch (err) {
        console.log("fetch single student err ::", err);
        return null;
      }
    },
  },

  Mutation: {
    createStudent: async (parent, args, context, info) => {
      const { name, age, cgpa, uName, uArea, uZila, uType } = args.inputStudent;
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
        return res;
      } catch (err) {
        console.log("saved student err :", err);
        return null;
      }
    },

    updateStudent: async (parent, args, context, info) => {
      const { name, age, cgpa, uName, uArea, uZila, uType } = args.inputStudent;

      try {
        const result = await Student.findByIdAndUpdate(
          args.id,
          {
            name: name,
            age: age,
            cgpa: cgpa,
            university: {
              uName: uName,
              uArea: uArea,
              uZila: uZila,
              uType: uType,
            },
          },
          { new: true }
        );

        return result;
      } catch (err) {
        console.log("product does not updated ::", err);
        return null;
      }
    },

    deleteStudent: async (parent, args, context, info) => {
      try {
        const result = await Student.findByIdAndDelete(args.id);
        return "Student deleted successfully!";
      } catch (err) {
        console.log("student does not deleted ::", err);
        return "Student does not deleted";
      }
    },
  },
};

module.exports = rootResolver;
