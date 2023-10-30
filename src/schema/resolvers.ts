import { books } from "../data/books.js";
import { patrons } from "../data/patrons.js";

export const resolvers = {
  Query: {
    patrons: () => patrons,
    patron: (_parent, args, _contextValue, _info) => {
      return patrons.find((p) => p.id == args.id);
    },
    books: () => books,
    book: (_parent, args) => {
      return books.find((b) => b.id == args.id);
    },
  },
  Mutation: {
    createPatron: (_parent, args) => {
      const patron = args.input;
      patron.id = patrons.length + 1;
      patron.favoriteBookIds = [];
      patrons.push(patron);
      console.log({ patron });

      return patron;
    },
  },
  Patron: {
    favoriteBooks: (parent) => {
      return books.filter((book) => parent.favoriteBookIds.includes(book.id));
    },
  },
};
