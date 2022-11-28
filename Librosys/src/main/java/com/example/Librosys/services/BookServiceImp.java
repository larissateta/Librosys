package com.example.Librosys.services;

import com.example.Librosys.models.Book;
import com.example.Librosys.repositories.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImp {
    @Autowired
    private BookRepo bookRepo;

    public List<Book> getAll(){
        List<Book> books= bookRepo.findAll();
        return books;
    }
    public Book getById(long id){
        Optional<Book> findById = bookRepo.findById(id);
        if(findById.isPresent()){
            Book book = findById.get();
            return book;
        }
        return null;
    }
}
