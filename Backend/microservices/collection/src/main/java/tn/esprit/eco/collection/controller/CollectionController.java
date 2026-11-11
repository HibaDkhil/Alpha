package tn.esprit.eco.collection.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/collections")
@Tag(name = "Collection", description = "Collection management endpoints")
public class CollectionController {

    @GetMapping("/hello")
    @Operation(summary = "Say hello", description = "Returns a greeting from the Collection Management Service")
    @ApiResponse(responseCode = "200", description = "Greeting returned")
    public String hello() {
        return "Hello from collection management service";
    }
}