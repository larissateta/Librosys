package com.example.Librosys.Controllers;

import com.example.Librosys.models.User;
import com.example.Librosys.repositories.UserRepo;
import com.example.Librosys.services.UserServiceImpl;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    public UserServiceImpl userService;
@Autowired
    public UserRepo userRepo;
    @PostMapping(value = "/login")
    public ResponseEntity<?> loginUser(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate()
    }
    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerUser(@RequestBody User user){
        if(!(userRepo.existsByEmail(user.getEmail()))){
            userService.saveUser(user);
            System.out.println("User Added");

            return ResponseEntity.ok("User registered Successfully");
        }
        return ResponseEntity.badRequest().body("User with the same email exist!");
    }

    @GetMapping(value= "/getUsers")
    @ResponseStatus(HttpStatus.OK)
    public List<User> findAllUsers (){
        return userService.getAll();
    }

    @PutMapping(value = "/update/{userId}")
    public void updateUsers(@RequestBody User user, @PathVariable("userId") Long userId){
        User u= userService.getUserById(userId);
        u.setEmail(user.getEmail());
        u.setFirstname(user.getFirstname());
        userService.saveUser(u);
    }

}
