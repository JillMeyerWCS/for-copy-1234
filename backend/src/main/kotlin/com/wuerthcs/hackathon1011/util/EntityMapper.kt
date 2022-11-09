package com.wuerthcs.hackathon1011.util

import com.wuerthcs.hackathon1011.domain.edooli.Company
import com.wuerthcs.hackathon1011.persistence.entity.CompanyJPAEntity
import org.springframework.stereotype.Component

@Component
class EntityMapper {
    fun map(jpa: CompanyJPAEntity): Company = Company(jpa.recid.toString(), jpa.name)
}