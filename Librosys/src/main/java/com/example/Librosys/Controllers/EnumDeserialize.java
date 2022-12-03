package com.example.Librosys.Controllers;

import com.example.Librosys.models.Roles;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class EnumDeserialize extends StdDeserializer <Roles>{
    protected EnumDeserialize(JavaType valueType) {
        super(valueType);
    }

    @Override
    public Roles deserialize(JsonParser jsonParser, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        JsonNode node =jsonParser.getCodec().readTree(jsonParser);
        String role= node.get("role").asText();
        for(Roles roles : Roles.values()){
            if(roles.getRole().equals(role)){
                return roles;
            }
        }
        return null;
    }
}
