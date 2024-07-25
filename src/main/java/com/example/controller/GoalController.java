package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GoalController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/summary")
    public String summary() {
        return "summary";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }
}
