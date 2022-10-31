DateTime? fromGraphQLDateTimeNullableToDartDateTimeNullable(String? date) =>
    date == null ? null : fromGraphQLDateTimeToDartDateTime(date);

String? fromDartDateTimeNullableToGraphQLDateTimeNullable(DateTime? date) =>
    date == null ? null : fromDartDateTimeToGraphQLDateTime(date);

DateTime fromGraphQLDateTimeToDartDateTime(String date) => DateTime.parse(date);

String fromDartDateTimeToGraphQLDateTime(DateTime date) =>
    date.toUtc().toIso8601String();
