import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Meh, Frown, Zap, Brain } from 'lucide-react';
import { useMoodStore, type Mood } from '../store/moodStore';

const moodConfig: { mood: Mood; icon: React.ElementType; label: string; color: string }[] = [
  { mood: 'energetic', icon: Zap, label: 'Energetic', color: 'bg-yellow-500' },
  { mood: 'focused', icon: Brain, label: 'Focused', color: 'bg-blue-500' },
  { mood: 'neutral', icon: Meh, label: 'Neutral', color: 'bg-gray-500' },
  { mood: 'tired', icon: Frown, label: 'Tired', color: 'bg-purple-500' },
  { mood: 'stressed', icon: Smile, label: 'Stressed', color: 'bg-red-500' },
];

export const MoodTracker = () => {
  const { currentMood, setMood } = useMoodStore();

  return (
    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-white text-lg font-semibold mb-4">How are you feeling?</h2>
      <div className="grid grid-cols-5 gap-2">
        {moodConfig.map(({ mood, icon: Icon, label, color }) => (
          <motion.button
            key={mood}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMood(mood)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              currentMood === mood ? color : 'bg-white/5'
            }`}
          >
            <Icon className="w-6 h-6 text-white mb-1" />
            <span className="text-white text-xs">{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};