import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query HeaderModule {
    headerCollection(limit: 1) {
      items {
        logo {
          url
        }
        navBarLinkCollection {
          items {
            label
            url
          }
        }
      }
    }
  }
`;
