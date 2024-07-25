package com.example.model;

public class Goal {
    private String description;
    private boolean completed;

    public Goal(String description){
        this.description = description;
        completed = false;
    }

    // Getters and Setters
    public String getDescription() {
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(){
        this.completed = true;
    }
}
