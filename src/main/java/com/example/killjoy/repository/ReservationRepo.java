package com.example.killjoy.repository;

import com.example.killjoy.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation, Integer> {
}
