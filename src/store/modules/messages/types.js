import gql from "graphql-tag";

export const MESSAGES_QUERY = gql`
  query($channelId: Int!) {
    getMessages(channelId: $channelId) {
      author {
        username
        avatarUrl
      }
      text
      created
    }
  }
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation($channelId: Int!, $text: String!) {
    createMessage(channelId: $channelId, text: $text) {
      success
    }
  }
`;

export const SEARCH_MESSAGE_QUERY = gql`
  query($channelId: Int!, $searchQueryString: String!) {
    searchMessages(
      channelId: $channelId
      searchQueryString: $searchQueryString
    ) {
      messages {
        text
        author {
          username
          avatarUrl
        }
        created
      }
    }
  }
`;
