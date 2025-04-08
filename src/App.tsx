import React, { useEffect } from 'react';
import { BackgroundGradient } from './components/BackgroundGradient';
import { Timer } from './components/Timer';
import { TaskList } from './components/TaskList';
import { MoodTracker } from './components/MoodTracker';
import { useTimerStore } from './store/timerStore';
import { Brain } from 'lucide-react';

function App() {
  const { isRunning, tick, focusScore, completedSessions } = useTimerStore();

  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, tick]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundGradient />
      
      <div className="fixed inset-0 z-10 p-8 flex">
        {/* Main Content - Timer */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-8">
            <Brain className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">FocusFlow</h1>
          </div>

          <Timer />

          <div className="mt-8 flex gap-8">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">{focusScore}</div>
                <div className="text-sm opacity-70">Focus Score</div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">{completedSessions}</div>
                <div className="text-sm opacity-70">Sessions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Mood and Tasks */}
        <div className="w-96 flex flex-col gap-6 overflow-y-auto">
          <MoodTracker />
          <TaskList />
        </div>
      </div>
    </main>
  );
}

export default App;