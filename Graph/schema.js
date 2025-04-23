export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String]!
    reviews: [Review]!  # 👈 بازی‌ها می‌تونن چندین ریویو داشته باشن
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author     # 👈 نویسنده ریویو
    game: Game         # 👈 بازی مربوطه
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review]!  # 👈 نویسنده می‌تونه چند ریویو داشته باشه
  }

  type Query {
    games: [Game]!
    reviews: [Review]!
    authors: [Author]!
  }
`;
