package com.example.Librosys.repositories;

import com.example.Librosys.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionsRepo extends JpaRepository<Transaction, Long> {
    Optional<Transaction> findByBook(Long id);


}
