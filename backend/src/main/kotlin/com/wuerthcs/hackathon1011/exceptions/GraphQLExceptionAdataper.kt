package com.wuerthcs.hackathon1011.exceptions

import graphql.GraphQLError
import graphql.GraphqlErrorBuilder
import graphql.schema.DataFetchingEnvironment
import org.springframework.graphql.execution.DataFetcherExceptionResolverAdapter
import org.springframework.graphql.execution.ErrorType
import org.springframework.stereotype.Component
import java.lang.IllegalArgumentException

@Component
class GraphQLExceptionAdataper : DataFetcherExceptionResolverAdapter() {

    override fun resolveToSingleError(ex: Throwable, env: DataFetchingEnvironment): GraphQLError? {
        when (ex) {
            is NoSuchCompanyException -> {
                val noSuchCompanyException: NoSuchCompanyException = ex
                return GraphqlErrorBuilder.newError(env)
                    .message(noSuchCompanyException.message)
                    .errorType(ErrorType.BAD_REQUEST)
                    .build()
            }
            is IllegalArgumentException -> {
                val illegalArgumentException: IllegalArgumentException = ex
                return GraphqlErrorBuilder.newError(env)
                    .message(illegalArgumentException.message)
                    .errorType(ErrorType.BAD_REQUEST)
                    .build()
            }
        }
        return super.resolveToSingleError(ex, env)
    }
}