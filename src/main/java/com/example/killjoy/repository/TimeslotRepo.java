package com.example.killjoy.repository;

import com.example.killjoy.model.Timeslot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeslotRepo extends JpaRepository<Timeslot, Integer> {
}
