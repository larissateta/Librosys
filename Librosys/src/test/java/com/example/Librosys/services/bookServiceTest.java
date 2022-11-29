package com.example.Librosys.services;

import com.example.Librosys.models.Book;
import com.example.Librosys.repositories.BookRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.testng.AssertJUnit.assertEquals;

@RunWith(MockitoJUnitRunner.class)

public class bookServiceTest {

    @Mock
    private BookRepo bookRepo;

    @InjectMocks
    private BookServiceImp bookServiceImp;

    DateFormat simpleDate= new SimpleDateFormat("yyyy-MM-dd");
    @Test
    public void getAll_books() throws ParseException {
//        when(bookRepo.findAll()).thenReturn(Arrays.asList(new Book(19921239, "After", "Bakame Edition", "2002-02-01" ),
//                new Book(12934888, "After we fell", "Bakame Edition", "2020-02-12")));
//        assertEquals(10, bookServiceImp.getAll().size());
    }
}
