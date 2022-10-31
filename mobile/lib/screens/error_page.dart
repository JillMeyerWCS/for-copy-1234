import 'package:flutter/material.dart';
import 'package:mobile/widgets/error_display.dart';
import 'package:wcs_design_mobile/wcs_design_mobile.dart';

class ErrorPage extends StatelessWidget {
  const ErrorPage({Key? key, required this.error}) : super(key: key);
  final Exception? error;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Headline1("Error occurred"),
      ),
      body: Padding(
          padding: const EdgeInsets.fromLTRB(8.0, 0, 8.0, 0),
          child: ErrorDisplay(error: error)),
    );
  }
}
