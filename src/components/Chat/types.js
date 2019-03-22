import gql from "graphql-tag";

export const MESSAGE_SUBSCRIPTION = gql`
  subscription($channelId: Int!) {
    newChannelMessage(channelId: $channelId) {
      text
      author {
        username
        avatarUrl
      }
    }
  }
`;
