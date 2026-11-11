package tn.esprit.eco.reward.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rewards")
@Tag(name = "Reward")
public class RewardController {

    //@Operation(summary = "Hello world test")
    @GetMapping("/hello")
    public String hello() {
        return "Hello world reward microservice";
    }
}