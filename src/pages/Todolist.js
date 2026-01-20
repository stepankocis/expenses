import { useState } from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Total from "../components/total"; // 👈 add this

function Todolist() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Jidlo", description: "300" },
        { id: 2, name: "okna", description: "3000" }
    ]);

    const addTask = (newTask) => {
        let newId = Math.max(...tasks.map(task => task.id)) + 1;
        newTask.id = newId;
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="App container p-5">
            <Header text="Vydaje" className="mb-3 mt-3"/>
            <AddTask onSubmit={addTask} />

            <Total list={tasks} />

            <Tasks tasks={tasks} Delete={removeTask} />
        </div>
    );
}

export default Todolist;
