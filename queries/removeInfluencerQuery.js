import gql from "graphql-tag";

export const removeInfluencer = gql`
mutation ($id:ID!) {
 removeInfluencer (id:$id) {
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
