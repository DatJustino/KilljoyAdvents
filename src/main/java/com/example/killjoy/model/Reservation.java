package com.example.killjoy.model;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "activityId", referencedColumnName = "activityId", nullable = false) //res skal have act
    private Activity activity;
}
