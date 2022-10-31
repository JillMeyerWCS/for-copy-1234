export const typeDefs = `
"""
Represents a string in ISO irgendwas
"""
scalar DateTime

enum Branding {
  AWGK
  EDOOLI
  FEGA
}

type Company {
  uuid: String!
  name: String!
  address: String
  email: String!
  registration: DateTime!
  branding: Branding!
  projects: [Project!]! # allows [] but not [null] or null
}

type Project {
  uuid: String!
  title: String!
  projectNumber: String
  budget: String
  customer: String
  address: String
  # maybe
  owner: User!
  employees: [User!]!
}

# MAYBE, re-evaluate at the end
type User {
  uuid: String!
  firstName: String
  lastName: String
  email: String
}

input ProjectsInput {
  title: String!
  projectNumber: String
  budget: String
  customer: String
  address: String
  # maybe
  ownerId: String!
  employeeIds: [String!]!
}

type Query {
  company(uuid: String!): Company!
  companies: [Company!]!
  project(uuid: String!): Project!
  projects(companyId: String): [Project!]!
}

type Mutation {
  createProject(input: ProjectsInput): Project!
  deleteProject: Boolean!
  updateProject(projectId: String!, input: ProjectsInput): Project!
}

`;
