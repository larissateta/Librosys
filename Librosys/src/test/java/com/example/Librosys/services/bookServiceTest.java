package com.example.Librosys.services;

import com.example.Librosys.models.Book;
import com.example.Librosys.repositories.BookRepo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.testng.AssertJUnit.assertEquals;

@RunWith(MockitoJUnitRunner.class)

public class bookServiceTest {

    @Mock
    private BookRepo bookRepo;

    @InjectMocks
    private BookServiceImp bookServiceImp;

    @Test
    public void getAll_books(){
        when(bookRepo.findAll()).thenReturn(Arrays.asList(new Book(1992123945629, "After", "Bakame Edition", "2002-02-01" ),
                new Book(1293456789123, "After we fell", "Bakame Edition", "2020-02-12")));
        assertEquals(10, bookServiceImp.getAll().size());
    }
}
