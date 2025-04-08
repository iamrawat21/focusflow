import { create } from 'zustand';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

interface TimerState {
  time: number;
  isRunning: boolean;
  mode: TimerMode;
  focusScore: number;
  completedSessions: number;
  setMode: (mode: TimerMode) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
  tick: () => void;
}

const FOCUS_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;

export const useTimerStore = create<TimerState>((set) => ({
  time: FOCUS_TIME,
  isRunning: false,
  mode: 'focus',
  focusScore: 0,
  completedSessions: 0,

  setMode: (mode) => {
    set((state) => {
      let newTime;
      switch (mode) {
        case 'focus':
          newTime = FOCUS_TIME;
          break;
        case 'shortBreak':
          newTime = SHORT_BREAK_TIME;
          break;
        case 'longBreak':
          newTime = LONG_BREAK_TIME;
          break;
        default:
          newTime = state.time;
      }
      return { mode, time: newTime, isRunning: false };
    });
  },

  toggleTimer: () => {
    set((state) => ({ isRunning: !state.isRunning }));
  },

  resetTimer: () => {
    set((state) => {
      let newTime;
      switch (state.mode) {
        case 'focus':
          newTime = FOCUS_TIME;
          break;
        case 'shortBreak':
          newTime = SHORT_BREAK_TIME;
          break;
        case 'longBreak':
          newTime = LONG_BREAK_TIME;
          break;
        default:
          newTime = FOCUS_TIME;
      }
      return { time: newTime, isRunning: false };
    });
  },

  tick: () => {
    set((state) => {
      if (state.time <= 0) {
        const newScore = state.mode === 'focus' ? state.focusScore + 10 : state.focusScore;
        const newSessions = state.mode === 'focus' ? state.completedSessions + 1 : state.completedSessions;
        return {
          isRunning: false,
          focusScore: newScore,
          completedSessions: newSessions,
        };
      }
      return { time: state.time - 1 };
    });
  },
}));