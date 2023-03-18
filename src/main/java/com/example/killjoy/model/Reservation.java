package com.example.killjoy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reservation {
    @Id
    @Column(length = 4)
    private String reservationId;

    @ManyToOne
    @JoinColumn(name = "activityId", referencedColumnName = "activityId")
    private Activity activity;
}
