package com.example.Librosys.services;

import com.example.Librosys.models.Student;
import com.example.Librosys.models.Transaction;
import com.example.Librosys.repositories.TransactionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl {
    @Autowired
    private TransactionsRepo transactionsRepo;

    public void saveTransaction(Transaction transaction){
        transactionsRepo.save(transaction);
    }
    public List<Transaction> getAll(){
        List<Transaction> transactions= transactionsRepo.findAll();
        System.out.println("Getting transactions from database "+ transactions);
        return transactions;
    }
    public Transaction getStudentById(long transaction_id){
        Optional<Transaction> findById= transactionsRepo.findById(transaction_id);
        if(findById.isPresent()){
            Transaction transaction = findById.get();
            return transaction;
        }
        return null;
    }
}
