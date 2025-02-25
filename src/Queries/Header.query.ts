import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query HeaderModule {
    headerCollection(limit: 1) {
      items {
        __typename
        ... on Header {
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
  }
`;
