package fr.agpm.pocs.sdr;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Movie {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    public Long id;
    @Column
    public String title;
    @ElementCollection
    @Column
    public List<String> actors;
    @Column
    public LocalDate released;
    @Column
    public Duration duration;
}
