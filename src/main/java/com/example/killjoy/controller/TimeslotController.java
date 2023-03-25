package com.example.killjoy.controller;

import com.example.killjoy.model.Timeslot;
import com.example.killjoy.repository.TimeslotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class TimeslotController {
    @Autowired
    TimeslotRepo timeslotRepo;

    @GetMapping("/timeslots")
    public List<Timeslot> getTimeslots(){
        return timeslotRepo.findAll();
    }

    @GetMapping("/timeslots/{id}")
    public Timeslot getTimeslots(@PathVariable Integer id){
        return timeslotRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/timeslot")
    @ResponseStatus(HttpStatus.CREATED)
    public Timeslot addTimeslot(@RequestBody Timeslot timeslot){
        System.out.println(timeslot);
        return timeslotRepo.save(timeslot);
    }

    @PutMapping("/timeslot/{id}")
    public ResponseEntity<Timeslot> updateTimeslot(@PathVariable Integer id, @RequestBody Timeslot timeslot) {
        Optional<Timeslot> timeslotOptional = timeslotRepo.findById(id);
        if (timeslotOptional.isPresent()) {
            timeslotRepo.save(timeslot);
            return new ResponseEntity<>(timeslot, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/timeslot/{id}")
    public ResponseEntity<Timeslot> deleteTimeslot(@PathVariable Integer id) {
        timeslotRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
