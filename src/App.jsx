import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title"

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Se quiser buscar tarefas de uma API, pode descomentar o código abaixo e comentar a linha 6, que pega do localStorage.
  // useEffect(() => {
  //   async function get() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       },
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //     setTasks(data);
  //   }

  //   get()
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    if (window.confirm("Tem certeza que deseja excluir a tarefa?")) {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
    }
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // gera id aleatório e unico para cada tarefa
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center p-6">
      <div className="w-full space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
