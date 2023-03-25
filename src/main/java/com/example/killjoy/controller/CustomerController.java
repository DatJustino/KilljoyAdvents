package com.example.killjoy.controller;

import com.example.killjoy.model.Customer;
import com.example.killjoy.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerRepo customerRepo;

    @GetMapping("/customers")
    public List<Customer> getCustomers(){
        return customerRepo.findAll();
    }

    @GetMapping("/customer/{id}")
    public Customer getCustomers(@PathVariable Integer id){
        return customerRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/customer")
    @ResponseStatus(HttpStatus.CREATED)
    public Customer addCustomer(@RequestBody Customer customer){
        System.out.println(customer);
        return customerRepo.save(customer);
    }

    @PutMapping("/customer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        Optional<Customer> customerOptional = customerRepo.findById(id);
        if (customerOptional.isPresent()) {
            customerRepo.save(customer);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity<Customer> deleteCustomer(@PathVariable Integer id) {
        customerRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
