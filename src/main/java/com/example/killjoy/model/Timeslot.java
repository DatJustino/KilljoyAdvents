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
    private LocalTime timeslotStart;

    @OneToMany(mappedBy = "timeslot", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Reservation> reservations = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "activityId", referencedColumnName = "activityId")
    private Activity activity;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "employeeId", referencedColumnName = "employeeId") //res skal have act
    private Employee employee;
}
