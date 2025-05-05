import { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import CalendarView from '../components/CalendarView';
import { Task } from '../types/Task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Tracker</h1>
      <CalendarView tasks={tasks} onSelectDate={setSelectedDate} />
      <TaskInput date={selectedDate} onAdd={(task) => setTasks([...tasks, task])} />
      <TaskList
        date={selectedDate}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}
