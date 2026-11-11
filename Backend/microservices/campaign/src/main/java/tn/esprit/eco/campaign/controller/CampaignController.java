
package tn.esprit.eco.campaign.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CampaignController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World from Campaign Service!";
    }
}
