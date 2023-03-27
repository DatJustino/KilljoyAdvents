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
//@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"customer", "timeslot"})}) -virker ikke
public class Reservation {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer reservationId;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "timeslotId", referencedColumnName = "timeslotId")
    private Timeslot timeslot;

    @NotNull
    @ManyToOne
    //@Column(nullable = false) med kun @NotNull var customerId stadig null???
    @JoinColumn(name = "customerId", referencedColumnName = "customerId")
    private Customer customer;
}
