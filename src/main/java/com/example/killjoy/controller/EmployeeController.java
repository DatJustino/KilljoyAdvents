package com.example.killjoy.controller;

import com.example.killjoy.model.Employee;
import com.example.killjoy.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class EmployeeController {
    @Autowired
    EmployeeRepo employeeRepo;

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        return employeeRepo.findAll();
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployee(@PathVariable Integer id){
        return employeeRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/employee")
    @ResponseStatus(HttpStatus.CREATED)
    public Employee addEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        return employeeRepo.save(employee); //hvor returneres den til?
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employee) {
        Optional<Employee> employeeOptional = employeeRepo.findById(id);
        if (employeeOptional.isPresent()) {
            employeeRepo.save(employee);
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Integer id) {
        employeeRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
