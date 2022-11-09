package com.wuerthcs.hackathon1011.persistence.entity

import java.util.UUID
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class CompanyJPAEntity(
    @Id
    @GeneratedValue
    val uuid: UUID,
    val name: String
) {
}