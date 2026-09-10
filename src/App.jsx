import { useState, useEffect } from 'react';
import { Heart, Sparkles, Check, Trash, Bluesky, Coffee, Snail, Apple } from 'pixelarticons/react';
import { data } from 'autoprefixer';




function SnailProgressBar({ completedCount, totalCount }) {
  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const [showBubble, setShowBubble] = useState(false);
  const [quote, setQuote] = useState("");
  const [isFading, setIsFading] = useState("");

  const [clickTime, setClickTime] = useState(0);


  const snailQuotes = [
    "Go at your own pace!",
    "Slow and steady wins the race!",
    "Slime your way to success!",
    "Taking my time, still shining!",
    "I'm proud of you!",
    "You're doing great!",
    "Progress is progress!"
  ];

  const handleSnailClick = () => {
    +
      setQuote(snailQuotes[Math.floor(Math.random() * snailQuotes.length)]);
    setShowBubble(true);
    setIsFading(false);
    setClickTime(Date.now());
  };

  useEffect(() => {
    if (showBubble) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 3200);

      const removeTimer = setTimeout(() => {
        setShowBubble(false);
        setIsFading(false);
      }, 3500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [showBubble, clickTime]);

  useEffect(() => {
    if (totalCount > 0 && completedCount === totalCount) {
      setQuote("Yum!");
      setShowBubble(true);
      setClickTime(Date.now());
    }
  }, [completedCount, totalCount]);



  return (
    <div className="mt-6 mb-2 px-9 flex items-center justify-between font-geist w-full">
      <div className="relative h-8 flex items-center bg-gray-100/50 border-2 border-dashed border-lavender-haze rounded-none flex-1">
        <div style={{ width: `${Math.max(percentage, 5)}%` }} className="h-full bg-mint-magic rounded-none transition-all duration-500 relative flex items-center">

          {/* THE SNAIL & BUBBLE */}
          <div className="absolute -right-9 -top-3 z-10">

            {/* THE SPEECH BUBBLE */}
            {showBubble && (
              <div
                key={clickTime}
                className={`pixel-bubble absolute -top-14 -left-0 bg-white border-2 border-gold-glow px-3 py-2 rounded-none shadow-[2px_2px_0_0_#8fd1db80] whitespace-nowrap z-50 animate-pop-in origin-bottom-left transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'
                  }`}
              >
                <p className="text-xs font-tiny5 text-gray-700 flex">
                  {quote.split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block animate-bounce-smidge"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* The Snail !!!!! <3 */}
            <div
              onClick={handleSnailClick}
              className="cursor-pixel-hand hover:scale-110 transition-transform active:scale-95"
            >
              <Snail className="w-12 h-12 text-coffee-brown scale-x-[-1]" />
            </div>
          </div>

        </div>
      </div>
      <div className="ml-5 text-2xl flex items-center z-0">
        <Apple className="w-10 h-10 text-dark-green" />
        <span className="text-lg text-gold-glow font-geist ml-2 whitespace-nowrap">
          {completedCount} / {totalCount}
        </span>
      </div>
    </div>
  );
}


function App() {

  const [tasks, setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("girlypop-tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    else {
      return [];
    }

  });

  const [newTask, setNewTask] = useState("");

  const affirmations = [
    "You are capable of amazing things!",
    "Main character energy only today!",
    "You're going to be a fantastic developer!",
    "Elle Woods would be proud!",
    "You belong in that room!",
    "Mistakes are proof that you're trying!",
    "You're building the future!",
    "Your curiosity is your strength!",
    "Keep glowing and growing!"
  ];

  const [affirmation] = useState(affirmations[Math.floor(Math.random() * affirmations.length)]);

  useEffect(() => {
    localStorage.setItem("girlypop-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => setDragOverIndex(null);

  const handleDrop = (dropIndex) => {
    setDragOverIndex(null);
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedTasks = [...tasks];
    const [draggedItem] = updatedTasks.splice(draggedIndex, 1);
    updatedTasks.splice(dropIndex, 0, draggedItem);

    setTasks(updatedTasks);
    setDraggedIndex(null);
  };


  return (
    <div className="min-h-screen bg-pink-frosting cursor-pixel-pointer flex flex-col items-center py-12 px-4 selection:bg-hot-pink selection:text-white">

      {/* Header Section */}
      <div className="text-center mb-8">


        {/* Bouncing Icons*/}
        <div className="flex gap-4 justify-center animate-bounce mb-4 text-gold-glow">
          <Heart className="w-12 h-12" />
          <Sparkles className="w-12 h-12" />
          <Bluesky className="w-12 h-12" />
        </div>


        {/* Main Title */}
        <h1 className="text-4xl font-start text-hot-pink  mb-6">
          Snail's Pace To-Do
        </h1>
        {/* Affirnmation */}
        <p className="text-lg  text-coffee-brown bg-white/50 inline-block px-6 py-2 rounded-none shadow-[2px_2px_0_0_#F7A8C880] backdrop-blur-sm">
          {affirmation}
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-lg border-4 border-lavender-haze shadow-[8px_8px_0_0_rgba(1,0,1,0.1)]">

        {/* Input Form */}
        <form onSubmit={addTask} className="bg-lavender-haze/30 p-6 flex gap-3">
          <input
            type="text"
            placeholder="What's the vibe for today?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-3 cursor-pixel-text outline-none focus:ring-4 focus:ring-cool-night/30 text-gray-700 border-2 border-gray-250 font-silk text-sm rounded-none "
          />
          <button
            type="submit"
            className="bg-lavender-haze cursor-pixel-hand text-white px-6 py-3 rounded-none font-bold hover:bg-cool-night hover:scale-105 transition-all shadow-[2px_2px_0_0_rgba(1,0,1,0.07)] active:scale-95 active:border-2 active:border-cooler-night active:shadow-none font-tiny5 text-sm"
          >
            Add it!
          </button>
        </form>

        {/* SNAIL TIME */}
        <SnailProgressBar completedCount={completedTasks} totalCount={totalTasks} />

        {/* Task List */}
        <div className="p-6">
          {tasks.length === 0 ? (
            <p className="flex items-center justify-center gap-2 text-gray-400 italic py-4">
              Nothing to do? Time to relax! <Coffee className="w-6 h-6" />
            </p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task, index) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={() => handleDrop(index)}
                  className={`relative flex items-center justify-between p-4 rounded-none transition-all duration-300 cursor-pixel-hand active:cursor-pixel-grabbing
                  ${task.completed ? 'bg-mint-magic/40 opacity-70' : 'bg-gray-50 shadow-sm hover:scale-105 hover:shadow-[4px_4px_0_0_#8fd1db40]'} 
                  ${draggedIndex === index ? 'opacity-40' : ''}
                `}
                >

                  {dragOverIndex === index && draggedIndex !== index && (
                    <div className="absolute -top-[10px] left-0 right-0 h-0.5 bg-cool-night rounded-none z-50 pointer-events-none" />
                  )}

                  <div className="flex items-center gap-4 cursor-pixel-hand" onClick={() => toggleTask(task.id)}>
                    <div className={`w-6 h-6 rounded-none border-2 flex items-center justify-center transition-colors ${task.completed ? 'bg-hot-pink border-hot-pink' : 'border-gray-300'
                      }`}>
                      {task.completed && <span className="text-white text-xs"><Check className="w-5 h-5 text-white" /></span>}
                    </div>

                    <span className={`text-gray-700 font-medium text-lg font-tiny5 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                      {task.text}
                    </span>
                  </div>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-gray-300 cursor-pixel-hand transition-colors px-2 text-xl"
                  >
                    <Trash className="w-6 h-6 text-gray-400 hover:text-pink-500 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;