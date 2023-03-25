package com.example.killjoy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reservation {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer reservationId;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "timeslotId", referencedColumnName = "timeslotId")
    private Timeslot timeslot;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId", referencedColumnName = "customerId")
    private Customer customer;
}
