package com.example.killjoy.controller;

import com.example.killjoy.model.Reservation;
import com.example.killjoy.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class ReservationController {
    @Autowired
    ReservationRepo reservationRepo;

    @GetMapping("/reservations")
    public List<Reservation> getReservations(){
        return reservationRepo.findAll();
    }

    @GetMapping("/reservation/{id}")
    public Reservation getReservation(@PathVariable Integer id){
        return reservationRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/reservation")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation addReservation(@RequestBody Reservation reservation){
        System.out.println(reservation);
        return reservationRepo.save(reservation);
    }

    @PutMapping("/reservation/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable Integer id, @RequestBody Reservation reservation) {
        Optional<Reservation> reservationOptional = reservationRepo.findById(id);
        if (reservationOptional.isPresent()) {
            reservationRepo.save(reservation);
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/reservation/{id}")
    public ResponseEntity<Reservation> deleteReservation(@PathVariable Integer id) {
        reservationRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

