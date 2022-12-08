package com.example.Librosys.Controllers;

import com.example.Librosys.models.Student;
import com.example.Librosys.repositories.StudentRepo;

import com.example.Librosys.services.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    public StudentServiceImpl studentService;
@Autowired
    public StudentRepo userRepo;

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> registerUser(@RequestBody Student student){
        if(!(userRepo.existsByEmail(student.getEmail()))){
            studentService.saveStudent(student);
            System.out.println("Student Added");

            return ResponseEntity.ok("Student registered Successfully");
        }
        return ResponseEntity.badRequest().body("Student with the same email exist!");
    }

    @GetMapping(value= "/getStudents")
    @ResponseStatus(HttpStatus.OK)
    public List<Student> findAllStudents (){
        return studentService.getAll();
    }

    @PutMapping(value = "/update/{student_id}")
    public void updateUsers(@RequestBody Student student, @PathVariable("student_id") Long student_id){
        Student u= studentService.getStudentById(student_id);
        u.setEmail(student.getEmail());
        u.setFirstname(student.getFirstname());
        studentService.saveStudent(u);
    }
    @DeleteMapping(path = "/student/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long student_id){
        studentService.deleteStudent(student_id);

        return new ResponseEntity<String>("Student Deleted successfully!", HttpStatus.OK);
    }
}
