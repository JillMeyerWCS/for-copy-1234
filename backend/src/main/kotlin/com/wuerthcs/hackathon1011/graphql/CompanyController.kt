package com.wuerthcs.hackathon1011.graphql

import com.wuerthcs.hackathon1011.domain.edooli.Company
import com.wuerthcs.hackathon1011.service.CompanyService
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@Controller
class CompanyController(
    val companyService: CompanyService
) {

    @QueryMapping
    fun company(@Argument recid: Int): Company {
        return companyService.findCompanyById(recid)
    }

    @QueryMapping
    fun companies(): List<Company> {
        return companyService.findCompanies()
    }
}