import 'package:artemis/artemis.dart';
import 'package:artemis/client.dart';
import 'package:mobile/graphql/graphql_api.dart';

class ApiService {
  static final ApiService _instance = ApiService._();

  ApiService._();

  ArtemisClient _client = ArtemisClient("/graphql");

  factory ApiService() => _instance;

  Future<List<String>> getCompanyNames() async {
    final result = await _client.execute(GetCompaniesQuery());
    if (result.hasErrors) {
      throw ApiError(result, "GET_COMPANIES");
    }
    return Future.delayed(const Duration(milliseconds: 200), () => []);
  }

  updateClient(String graphQLEndpoint) =>
      _client = ArtemisClient(graphQLEndpoint);
}

class ApiError extends Error {
  ApiError(this.response, [this.queryDescription = "unknown"])
      : assert(response.hasErrors),
        assert(response.errors!.isNotEmpty);
  GraphQLResponse response;
  String queryDescription;

  @override
  String toString() {
    List<String> errorMessages =
        response.errors!.map((e) => e.message).toList();
    String baseMessage = "Errors during $queryDescription:\n\t";
    baseMessage += errorMessages.join("\n\t");
    return baseMessage;
  }
}
