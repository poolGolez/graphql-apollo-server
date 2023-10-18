import { books } from "../data/books.js";
import { patrons } from "../data/patrons.js";

export const resolvers = {
  Query: {
    patrons: () => patrons,
    patron: (_parent, args, _contextValue, _info) =>{
      return patrons.find((p) => p.id == args.id)
    }
  },
  Patron: {
    favoriteBooks: (parent) => {
      return books.filter((book) => parent.favoriteBookIds.includes(book.id))
    }
  }
};
