import gql from "graphql-tag";

export const updateInfluencer = gql`
mutation ($input:InfluencerInput!) {
  updateInfluencer (input:$input) {
    id
    name
    lastName
    instagram {
      profileUrl
    }
    twitter {
      profileUrl
    }
    youtube {
      profileUrl
    }
  }
}`;
