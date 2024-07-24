document.addEventListener('DOMContentLoaded', function () {
    const goalForm = document.getElementById('goal-form');
    const goalListContainer = document.getElementById('goal-list-container');
    const goalFormContainer = document.getElementById('goal-form-container');
    const goalList = document.getElementById('goal-list');

    goalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const goals = [
            document.getElementById('goal-input1').value,
            document.getElementById('goal-input2').value,
            document.getElementById('goal-input3').value
        ];
        localStorage.setItem('goals', JSON.stringify(goals));
        displayGoals(goals);
    });

    function displayGoals(goals) {
        goalList.innerHTML = '';
        goals.forEach((goal, index) => {
            const li = document.createElement('li');
            li.textContent = goal;
            goalList.appendChild(li);
        });
        goalFormContainer.style.display = 'none';
        goalListContainer.style.display = 'block';
    }

    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) {
        displayGoals(storedGoals);
    }
});
