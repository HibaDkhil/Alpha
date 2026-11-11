package tn.esprit.eco.impactanalytics.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImpactAnalyticsController {
    @GetMapping("/hello_impact")
    public String hello() {
        return "Hello World from Impact Analytics Service!";
    }
}
