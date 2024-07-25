package com.example.service;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import com.example.model.Goal;

@Service
public class GoalService {
    // ArrayList of goals
    private List<Goal> goals = new ArrayList<>();

    public List<Goal> getGoals() {
        return goals;
    }

    /**
     * Add a goal to the list.
     * @param goal goal to add
     */
    public void addGoal(Goal goal) {
        goals.add(goal);
    }
}
