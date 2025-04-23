import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
  Query: {
    games: () => db.games,
    reviews: () => db.reviews,
    authors: () => db.authors,
  },
  Game: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.game_id === parent.id),
  },
  Review: {
    author: (parent) =>
      db.authors.find((author) => author.id === parent.author_id),
    game: (parent) =>
      db.games.find((game) => game.id === parent.game_id),
  },
  Author: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.author_id === parent.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
