import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:wcs_design_mobile/wcs_design_mobile.dart';

class ErrorDisplay extends StatelessWidget {
  const ErrorDisplay({Key? key, required this.error}) : super(key: key);
  final dynamic error;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Headline1("An uncaught error occurred",
            textAlign: TextAlign.center),
        const Divider(
          color: Colors.black,
        ),
        Headline2(error.toString()),
      ],
    );
  }
}
