document.addEventListener("DOMContentLoaded", function() {
    fetchGoals();

    document.getElementById("goal-form").addEventListener("submit", function(event) {
        event.preventDefault();
        addGoal();
    });
});

function fetchGoals() {
    fetch("/api/goals")
        .then(response => response.json())
        .then(data => {
            const goalList = document.getElementById("goal-list");
            goalList.innerHTML = "";
            data.forEach(goal => {
                const li = document.createElement("li");
                li.textContent = goal.description + (goal.completed ? " (completed)" : "");
                goalList.appendChild(li);
            });
        });
}

function addGoal() {
    const goals = [
        { description: document.getElementById("goal-input1").value, completed: false },
        { description: document.getElementById("goal-input2").value, completed: false },
        { description: document.getElementById("goal-input3").value, completed: false }
    ];

    goals.forEach(goal => {
        fetch("/api/goals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goal)
        }).then(response => {
            if (response.ok) {
                fetchGoals();
            }
        });
    });
}
