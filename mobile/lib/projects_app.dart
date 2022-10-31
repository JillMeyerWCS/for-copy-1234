import 'package:flutter/material.dart';
import 'package:mobile/router.dart';
import 'package:wcs_design_mobile/wcs_design_mobile.dart';

class ProjectsApp extends StatelessWidget {
  const ProjectsApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return WCSApp.router(
      title: "Hackathon 10.11. GraphQL",
      routeInformationProvider: router.routeInformationProvider,
      routeInformationParser: router.routeInformationParser,
      routerDelegate: router.routerDelegate,
    );
  }
}
