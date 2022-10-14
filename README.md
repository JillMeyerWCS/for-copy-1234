# hackathon-11-10

Welcome to the second WCS Hackathon!

# Task description

Closely explore the [example schema](./schema.graphql). This schema is a snippet from our edooli developers REST API. Today, you have the goal to use this schema to either build a frontend or a backend around it.

Decide first if you want to build web or mobile or backend.
Prepare your local code by doing the following

```bash
git checkout -b [web|mobile|backend]-[NAME]
```

## Frontend Goals

Decide first if you want to build web or mobile. Then checkout the README either in [web/README.md](.web/README.md) or [mobile/README.md](.mobile/README.md).

Your goal is to retrieve the following data via the GraphQL API:

- list of all companies
- list of all projects
- filter projects by company
- update project
- create project
- delete project
- try to use at least once nested entities

You can style it however you like as well as feel free to add any functionalities you like.

## Backend

Checkout [backend/README.md](./backend/README.md) which explains the setup of the provided boilerplate code.

Your goal will be to implement the resolvers to support a GraphQL API described by the schema.
This includes:

- resolvers for all scalars
- resolvers for all types
- resolvers for all queries
- resolvers for all mutations
- retrieve the right data from persistence layer to return in the relevant resolver
- add error codes for company(uuid) and project(uuid) if entity does not exist
