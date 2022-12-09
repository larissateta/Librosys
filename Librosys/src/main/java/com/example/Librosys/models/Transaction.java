package com.example.Librosys.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private long transaction_id;


    @ManyToOne
    @JoinColumn(name="book_id", nullable = false)
    private Book book;
    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private Student student;


    public Transaction(Book book,  Student student, Status status) {
        this.book = book;
        this.status = status;
        this.student = student;
    }

    public Transaction() {

    }

    public long getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(long transaction_id) {
        this.transaction_id = transaction_id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
