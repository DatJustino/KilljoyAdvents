package com.example.killjoy.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Activity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer activityId;

    @NotNull
    private String name;

    private String imageurl;

    @OneToMany(mappedBy = "activity", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private Set<Timeslot> timeslots = new HashSet<>();
}
