export const typeDefs = `#graphql
  type Patron {
    id: ID!
    firstName: String
    lastName: String
    status: PatronStatus!,
    favoriteBookIds: [ID!]
    favoriteBooks: [Book!]
  }

  type Book {
    id: ID!,
    name: String!
  }

  type Query {
    patrons: [Patron!]
    patron(id: ID!): Patron
    books: [Book!],
    book: Book
  }

  enum PatronStatus {
    ACTIVE
    INACTIVE
  }
`;
