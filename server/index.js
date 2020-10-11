const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/example.js');

const app = express();
const PORT = 9001;

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  pretty: true,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
