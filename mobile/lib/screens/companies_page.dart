import 'package:flutter/material.dart';
import 'package:mobile/api_service.dart';
import 'package:mobile/widgets/error_display.dart';
import 'package:wcs_design_mobile/wcs_design_mobile.dart';

class CompaniesPage extends StatelessWidget {
  const CompaniesPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Headline1("Companies"),
      ),
      body: const Center(child: CompanyNamesList()),
    );
  }
}

class CompanyNamesList extends StatefulWidget {
  const CompanyNamesList({Key? key}) : super(key: key);

  @override
  State<CompanyNamesList> createState() => _CompanyNamesListState();
}

class _CompanyNamesListState extends State<CompanyNamesList> {
  late Future<List<String>> companiesCall;

  @override
  void initState() {
    super.initState();
    companiesCall = ApiService().getCompanyNames();
  }

  void reload() {
    setState(() {
      companiesCall = ApiService().getCompanyNames();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        ElevatedButton(onPressed: reload, child: const Button("reload")),
        FutureBuilder<List<String>>(
          builder:
              (BuildContext context, AsyncSnapshot<List<String>> snapshot) {
            if (snapshot.connectionState != ConnectionState.done) {
              return const Body1("Loading...");
            }
            if (snapshot.hasError) {
              return ErrorDisplay(
                error: snapshot.error,
              );
            }
            if (snapshot.hasData) {
              if (snapshot.data != null && snapshot.data!.isNotEmpty) {
                return Column(
                  children: [
                    const Headline3("Company names:"),
                    ...snapshot.data!.map((e) => Body1(e))
                  ],
                );
              } else {
                return const Headline3(
                  "No companies found",
                  textAlign: TextAlign.center,
                );
              }
            }
            return const Body1("Loading...");
          },
          future: companiesCall,
        ),
      ],
    );
  }
}
