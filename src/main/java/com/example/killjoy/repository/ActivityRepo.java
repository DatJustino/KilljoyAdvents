package com.example.killjoy.repository;

import com.example.killjoy.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepo extends JpaRepository<Activity, String> {
}
