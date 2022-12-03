package com.example.Librosys.models;

import com.example.Librosys.Controllers.EnumDeserialize;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = EnumDeserialize.class)
public enum Roles {

    MANAGER("Manager"),
    ADMIN("Admin");
    
    private String role;

    Roles(String role){
        this.role=role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
