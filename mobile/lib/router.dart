import 'package:go_router/go_router.dart';
import 'package:mobile/screens/companies.dart';
import 'package:mobile/screens/error_page.dart';
import 'package:mobile/screens/welcome.dart';

final router = GoRouter(
  errorPageBuilder: (_, state) => NoTransitionPage(child: ErrorPage(error: state.error)),
    routes: [
  GoRoute(path: "/", name: "welcome", builder: (_, __) => const WelcomePage()),
  GoRoute(
      path: "/companies",
      name: "companies",
      builder: (_, __) => const CompaniesPage()),
]);
