import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query GetPageModules {
    pageCollection(where: { slug: "home" }, limit: 1) {
      items {
        pageTitle
        slug
        modulesCollection(limit: 10) {
          items {
            __typename
            ... on HeroBanner {
              title
              description
              alignment
              headingTop
              image {
                url
              }
              ctAsCollection {
                items {
                  _id
                  label
                  url
                }
              }
            }
            ... on GameSlider {
              heading
              description
              subDescription
              mediaCollection {
                items {
                  __typename
                  ... on GameSliderAsset {
                    title
                    subtitle
                    video {
                      title
                      description
                      contentType
                      fileName
                      size
                      url
                      width
                      height
                    }
                    img {
                      title
                      description
                      contentType
                      fileName
                      size
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
            ... on Rating {
              itemsCollection {
                items {
                  title
                  description
                }
              }
            }
            ... on WorldOfPlay {
              title
              imageCollection(limit: 10) {
                items {
                  title
                  description
                  image {
                    url
                  }
                }
              }
            }
            ... on Hiring {
              title
              description
              image {
                url
              }
              ctAsCollection {
                items {
                  _id
                  label
                  url
                }
              }
            }
            ... on News {
              title
              contentCollection {
                items {
                  image {
                    url
                  }
                  date
                  description
                }
              }
            }
            ... on Faq {
              title
              questionCollection {
                items {
                  question
                  answer
                }
              }
            }
          }
        }
      }
    }
  }
`;
