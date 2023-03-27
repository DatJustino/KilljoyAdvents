package com.example.killjoy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Timeslot {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer timeslotId;

    @NotNull
    @JsonFormat(pattern = "HH:mm")
    //@Column(nullable = false)
    private LocalTime timeslotStart;

    @OneToMany(mappedBy = "timeslot", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Reservation> reservations = new HashSet<>();

    @NotNull
    @ManyToOne
    @JoinColumn(name = "activityId", referencedColumnName = "activityId", nullable = false)
    private Activity activity;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "employeeId", referencedColumnName = "employeeId", nullable = false) //res skal have act
    private Employee employee;
}
