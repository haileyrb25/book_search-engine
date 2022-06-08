//still need to edit each mutation, but consts are filled out
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
        password
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
      password
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook(
  $bookId: Int!
  $authors: [String]
  $title: String!
  $description: String
  $image: String
) {
  saveBook(
    bookId: $bookId
    authors: $authors
    title: $title
    description: $description
    image: $image
) {
    _id
    username
    bookCount
    savedBooks {
        bookId
        authors
        image
        title
        description
        link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: Int!) {
  removeBook(bookId: $bookId) {
    username
    savedBooks {
        bookId
        authors
        image
        title
        description
        link
    }
  }
}
`;