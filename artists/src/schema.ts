import { gql } from "apollo-server";

export const typeDefs = gql`
  type Artist @key(fields: "id"){
    id: ID!
    name: String!
  }

  extend type Query {
    artists: [Artist]!
    artist(id: ID!): Artist
  }
`;
