package com.example.Librosys.services;

import com.example.Librosys.models.User;
import com.example.Librosys.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    private UserRepo userRepo;

    public void saveUser(User user){
        userRepo.save(user);
    }
    public List<User> getAll(){
        List<User> users= userRepo.findAll();
        System.out.println("Getting users from database "+ users);
        return users;
    }
    public User findById(long userId){
        Optional<User> findById= userRepo.findById(userId);
        if(findById.isPresent()){
            User user = findById.get();
            return user;
        }
        return null;
    }
}
