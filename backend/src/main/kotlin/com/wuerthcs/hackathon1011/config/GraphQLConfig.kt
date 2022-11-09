package com.wuerthcs.hackathon1011.config

import graphql.language.StringValue
import graphql.schema.Coercing
import graphql.schema.GraphQLScalarType
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.graphql.execution.RuntimeWiringConfigurer
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter

@Configuration
class GraphQLConfig {

    @Bean
    fun registerScalarTypes(): RuntimeWiringConfigurer {
        return RuntimeWiringConfigurer {
            // TODO register custom scalars here
            it.scalar(dateTimeScalar())
            it.build()
        }
    }

    @Bean
    fun dateTimeScalar(): GraphQLScalarType = GraphQLScalarType.newScalar()
        .name("DateTime")
        .description("A type representing a formatted date time value")
        .coercing(DateTimeCoercing)
        .build()

    object DateTimeCoercing : Coercing<OffsetDateTime, String> {

        private val formatter: DateTimeFormatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME

        override fun serialize(dataFetcherResult: Any): String = formatter.format((dataFetcherResult as OffsetDateTime))

        override fun parseValue(input: Any): OffsetDateTime = OffsetDateTime.parse(serialize(input), formatter)

        override fun parseLiteral(input: Any): OffsetDateTime {
            val dateTimeString = (input as? StringValue)?.value
            return OffsetDateTime.parse(dateTimeString, formatter)
        }

    }
}