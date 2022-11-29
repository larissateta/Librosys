package com.example.Librosys.models;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;

public class usermodeltest {
    @Test
    public void getfirstnameTest(){
         User user= new User("larissa", "teta", "tetalarissa69@gmail.com", "Pierra12");
         assertEquals("teta", user.getLastname());
     }
}
