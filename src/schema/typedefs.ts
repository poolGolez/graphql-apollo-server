export const typeDefs = `#graphql
  type Patron {
    id: ID
    firstName: String
    lastName: String
    status: String,
    favoriteBookIds: [Int!]
  }

  type Query {
    patrons: [Patron!]
  }
`;
