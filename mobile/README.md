# mobile - hackathon 10.11

Welcome to the mobile development part of the hackathon!

This folder contains everything to get you started on exploring GraphQL with Flutter.
Read through everything carefully to both understand your task and the existing code.

# Task

As the goal of this Hackathon is to learn about GraphQL, you can design the frontend as you like.
Go minimalistic and almost text only if you want to focus on the GraphQL part.
Otherwise, feel free to express yourself.

The GraphQL operations you should use in this app are the following:

- use the `companies` query to show all available companies
- use the `company(uuid)` query to retrieve details about a company
- use the `projects(companyId)` query to retrieve projects for a company
- use the `project(uuid)` query to retrieve details about a project
- use the `createProject(input: ProjectsInput)` mutation to create a project
- use the `deleteProject` mutation to delete a project
- use the `updateProject(projectId: String!, input: ProjectsInput)` update a project 

You don't have to use all the operations.
Feel free to play around with a single one to explore your options.
This could be with a focus on error handling, loading, re-fetching,
changing requested params on the fly with directives, nesting entities,
requesting multiple queries with one request, playing around with aliases,
and whatever you can come up with!
Remember the goal is learning, and the more different stuff each of us
looks at, the more we learn as a team.

At the end of the coding part, we will run different frontend implementations
against different backend implementations, so everyone can show of what they learned.

# Packages
The following packages are already setup:
- [artemis]
- [design-mobile] via [OnePub]
- [go_router]

First thing you have to is follow the instructions about [OnePub].
This enables you to retrieve our WCS private design package afterwards.
Then to set you up just run
```shell
flutter pub get
```

## Artemis
The [artemis] package provides a GraphQL client as well as code generation.
This is already setup so the types from our schema are already generated.
When you add new queries and mutations, you have to run the build runner:
```shell
flutter pub run build_runner build
```
or alternatively you can use
```shell
flutter pub run build_runner watch
```

## Go Router
[go_router] is our navigation framework.
You should be fine by just following the example in [Welcome Page].
In case your `BuildContext context` object does not over navigation methods -
like `context.push` and `context.pop` -
make sure that you have the following import
```dart
import 'package:go_router/go_router.dart';
```
as it provides the extension methods on `BuildContext`.

For changing the routes, have a look at [router].
This is also where you add pages

## WCS Design Mobile
[design-mobile] contains some components according to our mobile style guide.
At time of writing, it contains typography, colors, icons.

# Development

To run a development server, navigate to `../mock-backend` and run
```shell
npm install
npm run start
```

# Resources

- [GraphQL]
- [Artemis Docs]
- [Mobile Design Library]


[OnePub]: https://github.com/wuerthcs/tasks-mobile/pull/15
[artemis]: https://pub.dev/packages/artemis
[go_router]: https://pub.dev/packages/go_router
[design-mobile]: https://github.com/wuerthcs/design-mobile
[Welcome Page]: ./lib/screens/welcome_page.dart
[router]: ./lib/router.dart

[GraphQL]: https://graphql.org/learn/
[Artemis Docs]: https://github.com/comigor/artemis
[Mobile Design Library]: https://tasks-design-mobile-squeegee-tasks.apps.dev01.squeegee.cloud/#/