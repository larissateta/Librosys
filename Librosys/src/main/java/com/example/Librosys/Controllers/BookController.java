package com.example.Librosys.Controllers;

import com.example.Librosys.models.Book;
import com.example.Librosys.services.BookServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173/")
public class BookController {

    @Autowired
    BookServiceImp bookService;

    @PostMapping(value = "/bookRegister")
    public HttpStatus RegisterBook (@RequestBody Book book){
        bookService.saveBook(book);
        System.out.println("Saved book");
        return HttpStatus.CREATED;
    }
    @GetMapping(value= "/books")
        public List<Book> findAllBooks(){
            return bookService.getAll();
        }
}
