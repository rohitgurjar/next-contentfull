import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/im77grob3hcr/environments/master`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
