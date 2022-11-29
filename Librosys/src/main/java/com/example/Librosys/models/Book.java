package com.example.Librosys.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private long ISPN;

    private String title;

    private String Publishers;

    private Date pubDate;

    public Date getPubDate() {
        return pubDate;
    }

    public void setPubDate(Date pubDate) {
        this.pubDate = pubDate;
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

    public Book(long id, long ISPN, String title, String publishers, Date pubDate) {
        this.id = id;
        this.ISPN = ISPN;
        this.title = title;
        Publishers = publishers;
        this.pubDate = pubDate;
    }

    public Book(long ISPN, String title, String publishers, Date pubDate) {
        this.ISPN = ISPN;
        this.title = title;
        Publishers = publishers;
        this.pubDate = pubDate;
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
