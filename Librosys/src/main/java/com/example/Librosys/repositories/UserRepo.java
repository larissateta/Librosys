package com.example.Librosys.repositories;

import com.example.Librosys.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface UserRepo extends JpaRepository <User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

}
