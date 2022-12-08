package com.example.Librosys.models;


import net.bytebuddy.asm.Advice;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    private long ISPN;

    private String title;

    private String Author;

    private String Publishers;

    public String getAuthor() {
        return Author;
    }

    public void setAuthor(String author) {
        Author = author;
    }

    public Book(long ISPN, String title, String author, String publishers) {

        this.ISPN = ISPN;
        this.title = title;
        Author = author;
        Publishers = publishers;
    }



    public long getISPN() {
        return ISPN;
    }

    public void setISPN(long ISPN) {
        this.ISPN = ISPN;
    }

    public String getPublishers() {
        return Publishers;
    }

    public void setPublishers(String publishers) {
        Publishers = publishers;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Book() {
    }

    public Book(long id, long ISPN, String title, String publishers) {
        this.id = id;
        this.ISPN = ISPN;
        this.title = title;
        Publishers = publishers;
    }

    public Book(long ISPN, String title, String publishers) {
        this.ISPN = ISPN;
        this.title = title;
        Publishers = publishers;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", ISPN=" + ISPN +
                ", title='" + title + '\'' +
                ", Publishers='" + Publishers + '\'' +
                '}';
    }
}
