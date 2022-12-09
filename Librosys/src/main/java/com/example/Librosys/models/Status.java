package com.example.Librosys.models;

public enum Status {
    BORROWED("BORROWED"),
    RETURNED("RETURNED");

    private String status;
    Status(String status) {
        this.status= status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
