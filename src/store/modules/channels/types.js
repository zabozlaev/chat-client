import gql from "graphql-tag";

export const CHANNELS_QUERY = gql`
  query {
    getChannels {
      id
      name
      owner {
        username
      }
      members {
        username
      }
      lastMessage {
        text
      }
    }
  }
`;

export const CREATE_CHANNEL_MUTATION = gql`
  mutation($name: String!) {
    createChannel(name: $name) {
      success
      channel {
        id
        name
        members {
          username
        }
      }
    }
  }
`;
