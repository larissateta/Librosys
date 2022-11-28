package com.example.Librosys.repositories;

import com.example.Librosys.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepo extends JpaRepository<Book, Long> {
    boolean existsByTitle(String Title);

    @Override
    Optional<Book> findById(Long id);
}
