import 'package:go_router/go_router.dart';
import 'package:mobile/screens/companies.dart';
import 'package:mobile/screens/welcome.dart';

final router = GoRouter(routes: [
  GoRoute(path: "/", name: "welcome", builder: (_, __) => const WelcomePage()),
  GoRoute(
      path: "/companies",
      name: "companies",
      builder: (_, __) => const CompaniesPage()),
]);
