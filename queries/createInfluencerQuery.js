import gql from "graphql-tag";

export const createInfluencer = gql`
mutation ($input:InfluencerInput!) {
  createInfluencer (input:$input) {
    id
    name
    lastName
    instagram {
      profileUrl
      photoProfile
      totalPosts
      followers
    }
    twitter {
      profileUrl
      photoProfile
      totalPosts
      followers
    }
    youtube {
      profileUrl
      photoProfile
      totalPosts
      followers
    }
  }
}`;
