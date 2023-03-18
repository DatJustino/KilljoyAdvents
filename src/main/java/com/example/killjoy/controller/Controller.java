package com.example.killjoy.controller;

import com.example.killjoy.model.Activity;
import com.example.killjoy.repository.ActivityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    ActivityRepo activityRepo;

    @GetMapping("/activities")
    public List<Activity> getActivity(){
        return activityRepo.findAll();
    }
    @PostMapping("/activity")
    @ResponseStatus(HttpStatus.CREATED)
    public Activity addActivity(@RequestBody Activity activity){
        System.out.println(activity);
        return activityRepo.save(activity); //hvor returneres den til?
    }
    //post til ny, put til opdatering
}
