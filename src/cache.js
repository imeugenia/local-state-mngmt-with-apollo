import { InMemoryCache } from "@apollo/client";
import { isDarkModeVar } from "./localStorage";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isDarkMode: {
          read() {
            return isDarkModeVar();
          },
        },
      },
    },
  },
});
