// This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

// IMPORT THE gql METHOD FROM APOLLO SERVER
import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
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
