package com.wuerthcs.hackathon1011.exceptions

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY, reason = "no such company")
class NoSuchCompanyException(message: String? = "no such company") : RuntimeException(message)