import gql from "graphql-tag";

export const REGISTER_MUTATION = gql`
  mutation($input: RegisterInput!) {
    register(input: $input) {
      success
      errors {
        path
        message
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export const ME_QUERY = gql`
  query {
    me {
      username
      avatarUrl
    }
  }
`;
