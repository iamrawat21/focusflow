import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Trash2 } from 'lucide-react';
import { useTaskStore } from '../store/taskStore';

export const TaskList = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };

  return (
    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm flex-1 overflow-hidden flex flex-col">
      <h2 className="text-white text-lg font-semibold mb-4">Tasks</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 bg-white/5 rounded px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-indigo-600 text-white p-2 rounded"
        >
          <Plus size={20} />
        </motion.button>
      </form>

      <div className="space-y-2 overflow-y-auto flex-1">
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 bg-white/5 rounded p-3"
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`p-1 rounded-full ${
                task.completed ? 'bg-green-500' : 'bg-white/10'
              }`}
            >
              {task.completed && <Check size={16} className="text-white" />}
            </button>
            <span className={`flex-1 text-white ${task.completed ? 'line-through opacity-50' : ''}`}>
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-white/50 hover:text-white"
            >
              <Trash2 size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};