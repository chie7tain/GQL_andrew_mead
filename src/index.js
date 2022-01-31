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
        post: Post!
        greeting(name: String): String!
      }
      type User {
        id: ID!
        name: String!
        email: String!
        age: Int
      }
      type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
      }
    `,
    resolvers: {
      Query: {
        greeting: (parent, args, ctx, info) => console.log(args),
        me: () => ({
          id: "abc123",
          name: "james bond",
          email: "james bond@gmail.com",
          age: 32,
        }),
        post: () => ({
          id: "1234",
          title: "hello world",
          body: "this is my first post",
          published: true,
        }),
      },
    },
  },
});
server.start(() => console.log("server up and running"));
