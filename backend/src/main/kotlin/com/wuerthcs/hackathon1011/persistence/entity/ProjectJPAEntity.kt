package com.wuerthcs.hackathon1011.persistence.entity

import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class ProjectJPAEntity(
    @Id
    @GeneratedValue
    val uuid: UUID,
    val title: String,
    val projectNumber: String,
    val budget: String,
    val customer: String,
    val address: String
) {
}