import React, { useState } from 'react';

const DailyMicroHabitsTracker = () => {
  const [habits, setHabits] = useState([
    { name: 'Meditate for 10 minutes', completed: false },
    { name: 'Drink 8 glasses of water', completed: false },
    { name: 'Exercise for 30 minutes', completed: false },
    { name: 'Write in journal for 15 minutes', completed: false },
  ]);

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  return (
    <div>
      <h1>Daily Micro Habits Tracker</h1>
      <ul>
        {habits.map((habit, index) => (
          <li key={habit.name}>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(index)}
            />
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyMicroHabitsTracker;
