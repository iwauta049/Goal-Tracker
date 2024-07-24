package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GoalController {

    @GetMapping("/")
    public String home(Model model) {
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
