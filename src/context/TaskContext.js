import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const addTask = (task) => {
    setTodoTasks([...todoTasks, task]);
  };

  const moveTask = (taskId, from, to) => {
    let task;
    if (from === 'todo') {
      task = todoTasks.find((t) => t.id === taskId);
      setTodoTasks(todoTasks.filter((t) => t.id !== taskId));
    } else if (from === 'doing') {
      task = doingTasks.find((t) => t.id === taskId);
      setDoingTasks(doingTasks.filter((t) => t.id !== taskId));
    } else if (from === 'done') {
      task = doneTasks.find((t) => t.id === taskId);
      setDoneTasks(doneTasks.filter((t) => t.id !== taskId));
    }

    if (task) {
      if (to === 'todo') {
        setTodoTasks([...todoTasks, task]);
      } else if (to === 'doing') {
        setDoingTasks([...doingTasks, task]);
      } else if (to === 'done') {
        setDoneTasks([...doneTasks, task]);
      }
    }
  };

  const archiveTask = (taskId) => {
    const task = doneTasks.find((t) => t.id === taskId);
    if (task) {
      setDoneTasks(doneTasks.filter((t) => t.id !== taskId));
      setArchivedTasks([...archivedTasks, task]);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        todoTasks,
        doingTasks,
        doneTasks,
        archivedTasks, 
        addTask,
        moveTask,
        archiveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};