import 'package:artemis/artemis.dart';
import 'package:artemis/client.dart';
import 'package:mobile/graphql/graphql_api.dart';

class ApiService {
  static final ApiService _instance = ApiService._();

  ApiService._();

  ArtemisClient _client = ArtemisClient("http://localhost:4000");

  factory ApiService() => _instance;

  Future<List<String>> getCompanyNames() async {
    final result = await _client.execute(GetCompaniesQuery());
    if (result.hasErrors) {
      throw ApiError(result, "GET_COMPANIES");
    }
    return Future.delayed(const Duration(seconds: 1),
        () => result.data?.companies.map((e) => e.name).toList() ?? []);
  }

  updateClient(String graphQLEndpoint) =>
      _client = ArtemisClient(graphQLEndpoint);
}

class ApiError implements Exception {
  const ApiError(this.response, [this.queryDescription = "unknown"]);

  final GraphQLResponse response;
  final String queryDescription;

  @override
  String toString() {
    List<String> errorMessages =
        response.errors!.map((e) => e.message).toList();
    String baseMessage = "Errors during $queryDescription:\n\t";
    baseMessage += errorMessages.join("\n\t");
    return baseMessage;
  }
}
