import { gql } from "apollo-server";

export const typeDefs = gql`
  type Album @key(fields: "id") {
    id:ID!
    title: String!
    artist: Artist!
  }

  extend type Artist @key(fields: "id") {
    id: ID! @external
  }

  extend type Query {
    albums: [Album]!
    album(id: ID!): Album
  }
`;
