// import { createServer } from "@graphql-yoga/node";

// // Type definitions
// const typeDefs = `
//   type Query {
//     hello:String!
//   }
// `;

// // Resolvers
// const resolvers = {
//   Query: {
//     hello: () => "Hello world",
//   },
// };
// const server = createServer({
//   typeDefs,
//   resolvers,
// });

// server.start(() => {
//   console.log("server is up and running");
// });
import { createServer } from "@graphql-yoga/node";

// Create your server
const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        me: User!
      }
      type User {
        id: ID!
        name: String!
        email: String!
        age: Int
      }
    `,
    resolvers: {
      Query: {
        me: () => ({
          id: "abc123",
          name: "james bond",
          email: "james bond@gmail.com",
          age: 32,
        }),
      },
    },
  },
});
server.start(() => console.log("server up and running"));
