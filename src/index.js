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
        title: String!
        price: String!
        releaseYear: Int
        rating: Float
        inStock: Boolean
      }
    `,
    resolvers: {
      Query: {
        title: () => "Iphone X",
        price: () => "$ 1000usd",
        releaseYear: () => 2019,
        rating: () => 4.5,
        inStock: () => true,
      },
    },
  },
});
server.start(() => console.log("server up and running"));
