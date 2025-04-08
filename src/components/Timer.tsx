import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useTimerStore } from '../store/timerStore';

export const Timer = () => {
  const { 
    time, 
    isRunning, 
    mode,
    setMode,
    toggleTimer,
    resetTimer
  } = useTimerStore();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full ${mode === 'focus' ? 'bg-indigo-600' : 'bg-indigo-600/20'} text-white`}
          onClick={() => setMode('focus')}
        >
          Focus
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full ${mode === 'shortBreak' ? 'bg-pink-600' : 'bg-pink-600/20'} text-white`}
          onClick={() => setMode('shortBreak')}
        >
          Short Break
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-full ${mode === 'longBreak' ? 'bg-purple-600' : 'bg-purple-600/20'} text-white`}
          onClick={() => setMode('longBreak')}
        >
          Long Break
        </motion.button>
      </div>

      <div className="text-[12rem] font-bold text-white tracking-tight leading-none mb-8">
        {timeString}
      </div>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-white/10 rounded-full text-white hover:bg-white/20"
          onClick={toggleTimer}
        >
          {isRunning ? <Pause size={24} /> : <Play size={24} />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-white/10 rounded-full text-white hover:bg-white/20"
          onClick={resetTimer}
        >
          <RotateCcw size={24} />
        </motion.button>
      </div>
    </div>
  );
}