package com.example.Librosys.services;

import com.example.Librosys.models.Student;
import com.example.Librosys.repositories.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl {

    @Autowired
    private StudentRepo studentRepo;

    public void saveStudent(Student student){
        studentRepo.save(student);
    }
    public List<Student> getAll(){
        List<Student> students= studentRepo.findAll();
        System.out.println("Getting students from database "+ students);
        return students;
    }
    public Student getStudentById(long student_id){
        Optional<Student> findById= studentRepo.findById(student_id);
        if(findById.isPresent()){
            Student student = findById.get();
            return student;
        }
        return null;
    }

}
