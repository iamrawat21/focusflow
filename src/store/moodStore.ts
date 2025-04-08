import { create } from 'zustand';

export type Mood = 'energetic' | 'focused' | 'neutral' | 'tired' | 'stressed';

interface MoodEntry {
  timestamp: number;
  mood: Mood;
  sessionId: string;
}

interface MoodState {
  currentMood: Mood | null;
  moodHistory: MoodEntry[];
  setMood: (mood: Mood) => void;
}

export const useMoodStore = create<MoodState>((set) => ({
  currentMood: null,
  moodHistory: [],
  setMood: (mood) => {
    set((state) => ({
      currentMood: mood,
      moodHistory: [
        ...state.moodHistory,
        {
          mood,
          timestamp: Date.now(),
          sessionId: crypto.randomUUID(),
        },
      ],
    }));
  },
}));