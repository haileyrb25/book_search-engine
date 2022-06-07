// this will hold the query 'GET_ME' which will execute the 'me' query set up using apollo server

import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    tech {
      _id
      username
      email
      savedBooks {
          bookId
          authors
          image
          description
          title
          link
      }
    }
  }
`;
