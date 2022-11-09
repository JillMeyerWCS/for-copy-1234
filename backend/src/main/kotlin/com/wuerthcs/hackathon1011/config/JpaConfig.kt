package com.wuerthcs.hackathon1011.config

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.cfg.CoercionAction
import com.fasterxml.jackson.databind.cfg.CoercionInputShape
import com.fasterxml.jackson.databind.type.LogicalType
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder


@Configuration
class JpaConfig {

    @Bean
    fun getDatabasePopulator(): Jackson2RepositoryPopulatorFactoryBean {
        val populatorFactoryBean = Jackson2RepositoryPopulatorFactoryBean()
        populatorFactoryBean.setResources(arrayOf(ClassPathResource("data/companies.json")))
        return populatorFactoryBean
    }
}