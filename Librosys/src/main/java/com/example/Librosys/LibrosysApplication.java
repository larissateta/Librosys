package com.example.Librosys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude ={SecurityAutoConfiguration.class})
public class LibrosysApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibrosysApplication.class, args);
	}

}
