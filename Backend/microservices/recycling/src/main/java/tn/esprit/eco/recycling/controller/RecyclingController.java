package tn.esprit.eco.recycling.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recycling")
public class RecyclingController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from the Recycling microservice";
    }
}