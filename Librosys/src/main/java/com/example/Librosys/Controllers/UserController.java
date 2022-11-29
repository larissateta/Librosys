package com.example.Librosys.Controllers;

import com.example.Librosys.models.User;
import com.example.Librosys.repositories.UserRepo;
import com.example.Librosys.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    public UserServiceImpl userService;

    public UserRepo userRepo;

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        if(userRepo.existsByEmail(user.getEmail())){
            return ResponseEntity.badRequest().body(new )
        }
        userService.saveUser(user);
        System.out.println("User Added");
    }

    @GetMapping(value= "/getUsers")
    public List<User> findAllUsers (){
        return userService.getAll();
    }
}
