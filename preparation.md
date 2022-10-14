# Hackathon Preparation

## Idea

- Learn GraphQL

To make it possible for everyone to learn about GraphQL, the hackathon will follow the following agenda:

- [9:00 Learning about GraphQL](#learning-about-graphql)
- [10:15 Introduction of the practical part](#introduction-of-the-practical-part)
- 11:30 - 13:00 Break for team coffee and Lunch
- [13:00 Start to code](#start-to-code)
- [~16:00-16:30 Exchanging results and learnings](#exchanging-results-and-learnings)

For the practical part, the idea is to do a schema first approach to either backend or frontend. To reflect a part of our actual software in this, we will provide a small set of functionality from our edooli developers REST API and turn it into a GraphQL API.

### Practical part

To make it as easy as possible to get to actual work with GraphQL while not doing all the work in before, we following boilerplates will be provided.

The idea is to enable people to start with actually working with GraphQL without the need for setting up all the other things like database connections, components in frontend, etc. The focus should clearly be on GraphQL. We have to see how much the boilerplate should include while developing it. To see if the boilerplate is sufficient, Jill will implement the task in between on her own and record the time needed.

### Boilerplates

- For every backend and frontend technology one branch containing the boilerplate

  - Flutter
  - React
  - Kotlin

- frontend boilerplates

  - component library e.g. Material
  - the schema
  - code generation setup
  - basic companies query --> just put out concatened company names as ugly as possible

- backend boilerplate / kotlin with spring boot

  - the schema
  - code generation for all resolvers
  - companies resolver for companies query
  - persistence layer
  - data base setup with dummy data

# Agenda in detail

## Learning about GraphQL

- What is GraphQL?

- Why GraphQL?

- Comparison to REST

- How are things done in GraphQL?

  - Setup Altair together for trying things out live as we go
  - types and primitives and scalars
  - Simple queries
  - Queries with variables
  - Mutations
  - Subscriptions
  - Pagination
  - Fragments
  - Errors

- References
  - Example clients e.g. for react, flutter, Kotlin etc.The same ones we will use for the boilerplate
  - Examples for each client/server
  - Altair

## Introduction of the practical part

Go through the [example schema](./schema.graphql) together.
Try to have at least one person per topic (backend, mobile, web).
Teams are allowed, but not a necessity, group up or work alone as wanted/preferred.
They can be formed until we actually start to code.

We can participate ourselves of course, but we should still be reachable to provide help and answers questions.

## Start to code

Now that everyone has picked a topic, split up into the responsible groups:

- Jill for mobile
- Liubov for web
- Falco for backend

Lead the people through the boilerplate setup and then the coding can start 😄

## Exchanging results and learnings

To show off the results, we want to pair up backend solutions with frontend solutions.
--> each team can pick a matching branch from someone else to show off their results.

This might need a little bit of coordinating effort, the easiest solution will be to clone the repository twice and checkout the other solution in the second folder to run it there.

# Code preparations

## Base repository

This repository is the base. It will contain the README.md with the task description as well as the boilerplate code on dev.
Dev branch should look like this:

```
README.md
schema.graphql
|- web (empty)
   |- react app
|- mobile
   |- flutter app
|- server
   |- kotlin spring boot
```

The `.gitkeep` files are empty files as git does not track empty folders.

### web

Add boilerplate to the web folder.
This should contain:

- react app with typescript
- a component library (chakra, mui, ant, whatever)
- codegen for GraphQL with example query
- an example site
  - contains an example call to get the names for all companies
  - list them as a single text, comma separated
- README.md
  - explain the structure of the code
  - links to the tools used e.g. the graphql client, codegen tool, etc.

### mobile

Add boilerplate to the mobile folder.
This should contain:

- flutter base app
- a component library (material)
- codegen for GraphQL with example query
- an example site
  - contains an example call to get the names for all companies
  - list them as a single text, comma separated
- README.md
  - explain the structure of the code
  - links to the tools used e.g. the graphql client, codegen tool, etc.

### backend

Add boilerplate to the backend folder.
This should contain:

- a kotlin based spring boot application
- properly setup with a local database (mariadb or postgresql)
- dummy data for the data base
- code generation for partial schema
- README.md
  - explain the structure of the code
  - links to the tools used e.g. the graphql server, codegen tool, etc.

Note: reason for only including the schema partially here is that contrary to frontend, there won't be another reason to run the code generator again. So by only including e.g. the company type and the company query, people have to actually run the code generation once themselves which is also a good first step to get ready to dive into the code.
