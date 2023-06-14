import { useEffect, useState } from 'react';
import { getTasksByProjectId, createTask } from '../api';

function useTasks(projectId) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasksByProjectId(projectId)
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, [projectId]);
  const addTask = (task) => {
    createTask(task)
      .then((res) => {
        setTasks((prevState) => [...prevState, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return {
    tasks,
    addTask,
  };
}

export default useTasks;
