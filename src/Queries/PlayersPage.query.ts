import { gql } from "@apollo/client";

export const GET_PLAYERS_PAGE = gql`
  query GetPlayersPageModules {
    pageCollection(where: { slug: "players" }, limit: 1) {
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
              sys {
                id
              }
              heading
              description
              id
              subDescription
              mediaCollection {
                items {
                  __typename
                  ... on GameSliderAsset {
                    title
                    img {
                      url
                      width
                      height
                    }
                    class
                  }
                }
              }
            }

            ... on GameSlider @skip(if: false) {
              sys {
                id
              }
              heading
              description
              id
              subDescription
              mediaCollection {
                items {
                  __typename
                  ... on GameSliderAsset {
                    title
                    img {
                      url
                      width
                      height
                    }
                    class
                  }
                }
              }
            }

            ... on SkillzDifference {
              title
              description
              img {
                url
                width
                height
              }
              mediaCollection {
                ... on SkillzDifferenceMediaCollection {
                  items {
                    ... on GameSliderAsset {
                      img {
                        url
                        width
                        height
                      }
                      title
                    }
                  }
                }
              }
            }

            ... on Hiring {
              image {
                url
                width
                height
              }
              title
              description
            }

            ... on PlayersLoveSkillz {
              title
              imagesCollection {
                items {
                  url
                }
              }
              modulesCollection {
                items {
                  __typename
                  ... on GameSliderAsset {
                    img {
                      url
                      width
                      height
                    }
                    title
                    subtitle
                  }
                }
              }
            }

            ... on GetAheadOfTheGame {
              title
              moduleCollection {
                items {
                  ... on HeroBanner {
                    image {
                      url
                    }
                    title
                    description
                    headingTop
                    ctAsCollection(limit: 1) {
                      items {
                        _id
                        label
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
