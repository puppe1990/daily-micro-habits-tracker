import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css'; // Import the CSS styles

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
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-gray-700 text-2xl mb-4">Daily Micro Habits Tracker</h1>
      <Calendar
        onChange={(date) => setSelectedDate(date)}
        value={selectedDate}
        tileContent={({ date }) => {
          const dateStr = date.toISOString().substring(0, 10);
          return habits.map((habit, index) => (
            <div 
              key={habit.name}
              className={`flex items-center justify-center h-32 rounded-md ${habitCompletion[dateStr]?.[index] ? "bg-green-500" : "bg-red-500"} shadow-md`}
            >
              <input
                type="checkbox"
                checked={habitCompletion[dateStr]?.[index] || false}
                onChange={() => markHabitCompleted(index)}
              />
              <span className="text-center text-sm ml-2">{habit.name}</span>
            </div>
          ));
        }}
      />
      <button className="custom-button mt-4">Save</button>
    </div>
  );
};

export default DailyMicroHabitsTracker;
