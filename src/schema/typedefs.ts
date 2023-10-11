export const typeDefs = `#graphql
  type Patron {
    id: ID
    firstName: String
    lastName: String
    status: String
  }

  type Query {
    patrons: [Patron!]
  }
`;
