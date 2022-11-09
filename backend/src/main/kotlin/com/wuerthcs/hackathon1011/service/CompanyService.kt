package com.wuerthcs.hackathon1011.service

import com.wuerthcs.hackathon1011.domain.edooli.Company
import com.wuerthcs.hackathon1011.exceptions.NoSuchCompanyException
import com.wuerthcs.hackathon1011.persistence.repository.CompanyRepository
import com.wuerthcs.hackathon1011.util.EntityMapper
import org.springframework.dao.DataAccessException
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException
import java.util.*
import javax.persistence.EntityNotFoundException

@Service
class CompanyService(val companyRepository: CompanyRepository, val mapper: EntityMapper) {

    fun findCompanyById(id: String): Company {
        val uuid = UUID.fromString(id)
        try {
            val company = companyRepository.getReferenceById(uuid)
            return mapper.map(company)
        } catch (e: DataAccessException) {
            throw NoSuchCompanyException("could not find company for provided id '$id'")
        }
    }
}