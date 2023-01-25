import React, { useState } from 'react';
import Calendar from 'react-calendar';

const DailyMicroHabitsTracker = () => {
  const [habits, setHabits] = useState([
    { name: 'Meditate for 10 minutes', completed: false },
    { name: 'Drink 8 glasses of water', completed: false },
    { name: 'Exercise for 30 minutes', completed: false },
    { name: 'Write in journal for 15 minutes', completed: false },
  ]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [habitCompletion, setHabitCompletion] = useState({});

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  const markHabitCompleted = (habitIndex) => {
    const date = selectedDate.toISOString().substring(0, 10);
    setHabitCompletion({
      ...habitCompletion,
      [date]: {
        ...habitCompletion[date],
        [habitIndex]: !habitCompletion[date]?.[habitIndex],
      },
    });
  };

  return (
    <div>
      <h1>Daily Micro Habits Tracker</h1>
      <Calendar
        onChange={(date) => setSelectedDate(date)}
        value={selectedDate}
        tileContent={({ date }) => {
          const dateStr = date.toISOString().substring(0, 10);
          return habits.map((habit, index) => (
            <div key={habit.name}>
              <input
                type="checkbox"
                checked={habitCompletion[dateStr]?.[index] || false}
                onChange={() => markHabitCompleted(index)}
              />
              {habit.name}
            </div>
          ));
        }}
      />
    </div>
  );
};

export default DailyMicroHabitsTracker;
