import { books } from "../data/books.js";
import { patrons } from "../data/patrons.js";

export const resolvers = {
  Query: {
    patrons: () => patrons,
    patron: (parent, args, contextValue, info) =>{
      return patrons.find((p) => p.id == args.id)
    }
  },
};
