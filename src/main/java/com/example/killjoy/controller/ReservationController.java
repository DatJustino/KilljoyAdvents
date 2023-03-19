package com.example.killjoy.controller;

import com.example.killjoy.model.Reservation;
import com.example.killjoy.repository.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ReservationController {
    @Autowired
    ReservationRepo reservationRepo;

    @GetMapping("/reservations")
    public List<Reservation> getReservations(){
        return reservationRepo.findAll();
    }
    @PostMapping("/reservation")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation addReservation(@RequestBody Reservation reservation){
        System.out.println(reservation);
        return reservationRepo.save(reservation);
    }
}

