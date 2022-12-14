import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_AD = gql`
  mutation saveAd($adData: AdInput!) {
    saveAd(adData: $adData) {
      _id
      username
      email
      adCount
      savedAds {
        adId
        title
        link
      }
    }
  }
`;

export const REMOVE_AD = gql`
  mutation removeAd($adId: ID!) {
    removeAd(adId: $adId) {
      _id
      username
      email
      adCount
      savedAds {
        adId
        title
        link
      }
    }
  }
`;

