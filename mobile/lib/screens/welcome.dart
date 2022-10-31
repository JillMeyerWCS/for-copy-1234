import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:wcs_design_mobile/wcs_design_mobile.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Headline1("Hackathon 10.11"),
      ),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(8.0, 0, 8.0, 0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Headline1("Topic of today is GraphQL", textAlign: TextAlign.center),
            const Divider(
              color: Colors.black,
            ),
            const Headline2(
                "Your task description can be found in README.md\nAnd a description of this boilerplate in mobile/README.md",
                textAlign: TextAlign.center),
            const Divider(
              color: Colors.black,
            ),
            ElevatedButton(
                onPressed: () => context.replaceNamed("companies"),
                child: const Button("See example page"))
          ],
        ),
      ),
    );
  }
}
