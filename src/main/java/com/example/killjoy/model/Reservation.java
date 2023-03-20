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
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer reservationId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "timeslotId", referencedColumnName = "timeslotId", nullable = false) //res skal have act
    private Timeslot timeslot;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId", referencedColumnName = "customerId", nullable = false) //res skal have act
    private Customer customer;
}
