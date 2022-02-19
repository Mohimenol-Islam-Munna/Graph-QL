const express = require("express");
const { buildSchema, graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

// build schema
const schema = buildSchema(` 
    type Query {
        name: String,
        email: String,
    }
`);

// resolver(object of fucntion)
// * method's name in resolver must be match the any name of Query's property in buildSchema
const rootValue = {
  name: () => "Mohimenol Islam Munna",
  email: "munna.cse.pust@gmail.com",
};
 
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.send("Home Page");
});

const PORT = 5000;
app.listen(5000, () => {
  console.log(`server is running at ${PORT}...`);
});
