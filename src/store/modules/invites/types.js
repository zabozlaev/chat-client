import gql from "graphql-tag";

export const INVITES_QUERY = gql`
  query {
    getInvites {
      channels {
        name
        members {
          username
          avatarUrl
        }
      }
      success
    }
  }
`;
