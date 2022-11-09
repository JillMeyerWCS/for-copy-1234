export const typeDefs = `"""
Represents a string complying to ISO 8601
"""
scalar DateTime

enum Branding {
  AWGK
  EDOOLI
  FEGA
  WUERTH
  TOWIO
}

type Company {
  recid: ID!
  name: String!
  address: String
  email: String!
  registration: DateTime!
  branding: Branding!
  projects: [Project!]! # allows [] but not [null] or null
}

type Project {
  uuid: ID!
  title: String!
  projectNumber: String
  budget: String
  customer: String
  address: String
}

input ProjectsInput {
  title: String!
  projectNumber: String
  budget: String
  customer: String
  address: String
}

type Query {
  company(recid: ID!): Company!
  companies: [Company!]!
  project(uuid: ID!): Project!
  projects(companyId: ID): [Project!]!
}

type Mutation {
  createProject(input: ProjectsInput): Project!
  deleteProject(projectId: ID!): Boolean!
  updateProject(projectId: ID!, input: ProjectsInput): Project!
}
`;
