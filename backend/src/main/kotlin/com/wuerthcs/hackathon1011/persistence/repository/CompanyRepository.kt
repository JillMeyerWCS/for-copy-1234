package com.wuerthcs.hackathon1011.persistence.repository

import com.wuerthcs.hackathon1011.persistence.entity.CompanyJPAEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface CompanyRepository: JpaRepository<CompanyJPAEntity, UUID> {
}