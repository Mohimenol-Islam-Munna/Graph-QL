const { buildSchema, graphql } = require("graphql");

const app = express();

// build schema
const schema = buildSchema(` 
    type Query {
        name: String,
        email: String,
    }
`);

// resolver(object of fucntion)
// * method's name in resolver must be match to any name of Query's property in buildSchema
const rootValue = {
  name: () => "Mohimenol Islam Munna",
  email: "munna.cse.pust@gmail.com",
};

// query
graphql({
  // schema name
  schema,

  // query
  // source name must be match to any name of Query's property in buildSchema
  source: "{name, email}",

  // resolver
  rootValue,
}).then((res) => console.log("Query Response ::", res));
