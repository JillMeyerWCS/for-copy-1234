package com.wuerthcs.hackathon1011.persistence.entity

import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany

enum class Branding {
    awkg,
    edooli,
    fega,
    wuerth,
    towio,
}

@Entity
class CompanyJPAEntity(
    @Id
    @GeneratedValue
    val recid: Int,
    val name: String,
    val email: String,
    val registration: Date,
    val branding: Branding,
    @OneToMany
    val projects: Set<ProjectJPAEntity>,
    val address: String?
) {
}