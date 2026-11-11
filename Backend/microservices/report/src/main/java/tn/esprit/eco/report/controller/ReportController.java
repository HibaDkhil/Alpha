
package tn.esprit.eco.report.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World from Report Microservice!";
    }
}
