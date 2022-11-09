# hackathon-11-10

Welcome to the second WCS Hackathon!

# Task description

Closely explore the [example schema]. This schema is a snippet from our edooli developers REST API. Today, you have the goal to use this schema to either build a frontend or a backend around it.

Decide first if you want to build web or mobile or backend.
Prepare your local code by doing the following

```bash
git checkout -b [web|mobile|backend]-[NAME]
```

## Frontend Goals

Decide first if you want to build web or mobile. Then checkout the README either in [web/README.md] or [mobile/README.md].

Your goal is to retrieve the following data via the GraphQL API:

The GraphQL operations you should use in this app are the following:

- use the `companies` query to show all available companies
- use the `company(uuid)` query to retrieve details about a company
- use the `projects(companyId)` query to retrieve projects for a company
- use the `project(uuid)` query to retrieve details about a project
- use the `createProject(input: ProjectsInput)` mutation to create a project
- use the `deleteProject` mutation to delete a project
- use the `updateProject(projectId: String!, input: ProjectsInput)` update a project

Bonus:

- implement the queries from the [bonus schema]

While developing, you can use the [mock backend] project to have some dummy data available to play around with

## Backend

Checkout [backend/README.md] which explains the setup of the provided boilerplate code.

Your goal will be to implement the resolvers to support the GraphQL API described by the schema.
This includes:

- resolvers for all queries
- resolvers for all mutations
- add error codes for company(uuid) and project(uuid) if entity does not exist

Bonus:

- fix data parsing for registration date in companies example data
- prepare example project data by extracting it from stage
- implement queries from the [bonus schema]

## Disclaimer

You don't have to implement the complete schema.
Feel free to play around with a single bits of it to explore your options.
This could be with a focus (depending on backend or frontend of course) on error handling, loading, re-fetching, optimising data fetching for nested entities on a per request base,
changing requested params on the fly with directives,
requesting multiple queries with one request, playing around with aliases,
and whatever you can come up with!
Remember the goal is learning, and the more different stuff each of us
looks at, the more we learn as a team.

# General Resources

- [GraphQL.org]
- [Altair]

[altair]: https://altairgraphql.dev/
[graphql.org]: https://graphql.org/
[example schema]: ./schema.graphql
[bonus schema]: ./bonus.schema.graphql
[web/readme.md]: ./web/README.md
[mobile/readme.md]: ./mobile/README.md
[backend/readme.md]: ./backend/README.md
[mock backend]: ./mock-backend/README.md
