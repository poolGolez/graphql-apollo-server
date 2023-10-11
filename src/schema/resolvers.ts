import { patrons } from "../data/patrons.js";

export const resolvers = {
  Query: {
    patrons: () => patrons,
  },
};
