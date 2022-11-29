package com.example.Librosys.Controllers;

import com.example.Librosys.models.User;
import com.example.Librosys.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    public UserServiceImpl userService;

    @PostMapping(value = "/save/user")
    public void saveUser(@RequestBody User user){
        userService.saveUser(user);
        System.out.println("User Added");
    }

    @GetMapping(value= "/getUsers")
    public List<User> findAllUsers (){
        return userService.getAll();
    }
}
