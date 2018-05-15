import gql from "graphql-tag";

export const allInfluencers = gql`
query allInfluencers {
  allInfluencers {
    id
    name
    lastName
    instagram {
      profileUrl
      photoProfile
      followers
      totalPosts
    }
    twitter {
       profileUrl
      photoProfile
      followers
      totalPosts
    }
    youtube {
       profileUrl
      photoProfile
      followers
      totalPosts
    }
  }
}`;
