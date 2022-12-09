package com.example.Librosys.Controllers;

import com.example.Librosys.models.Book;
import com.example.Librosys.models.Transaction;
import com.example.Librosys.services.TransactionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173/")
public class TransactionsController {

    @Autowired
    TransactionServiceImpl transactionService;

    @PostMapping(value = "/transRegister")
    public HttpStatus AddTransaction (@RequestBody Transaction transaction){
        transactionService.saveTransaction(transaction);
        System.out.println("Saved transaction");
        return HttpStatus.CREATED;
    }
    @GetMapping(value="/transactions")
    public List<Transaction> findAllTransactions(){
        return transactionService.getAll();
    }


}
