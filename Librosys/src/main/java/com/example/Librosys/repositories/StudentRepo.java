package com.example.Librosys.repositories;

import com.example.Librosys.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface StudentRepo extends JpaRepository <Student, Long> {

    Optional<Student> findByEmail(String email);

    boolean existsByEmail(String email);


}
