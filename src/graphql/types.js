import gql from "graphql-tag";
import { gqlQuery } from ".";

export const REFRESH_QUERY = gql`
  query($token: String!) {
    refreshToken(token: $token) {
      refreshToken
      accessToken
      errors
    }
  }
`;

export const proceedRefreshToken = token => {
  return gqlQuery(REFRESH_QUERY, { token });
};
