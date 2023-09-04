import Headerr from "./components/Headerr";
import Addform from "./components/Addform";
import Itemm from "./components/Itemm";
import "./App.css"
import { useState, useEffect } from "react"
function App() {
  const [tasks, seTtask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [title, setTitle] = useState("")
  const [editid, setEditid] = useState(null)
  const [theme, seTheme] = useState("light")
  const [timee, setTime] = useState()


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))

  }, [tasks])

  function deleteTask(id) {
    const result = tasks.filter(item => (item.id !== id))
    seTtask(result)
  }

  function editTask(id) {
    setEditid(id)
    const editTask = tasks.find((item) => item.id === id)
    setTitle(editTask.title)
    setTime(editTask.timee)

  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("กรุณาป้อนข้อมูล")
    }
    else if (editid) {
      const updateTask = tasks.map((item) => {
        if (item.id === editid) {
          return { ...item, title: title, timee: timee }
        }
        return item;
      })
      seTtask(updateTask)
      setEditid(null)
      setTitle("")
      setTime("")
      
    }

    else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title, timee: timee
      }
      seTtask([...tasks, newTask])

    }

  }






  return (
    <div className={"App " + theme}>
      <Headerr theme={theme} seTheme={seTheme} />
      <div className="container">
        <Addform title={title} setTitle={setTitle} saveTask={saveTask} editid={editid} timee={timee} setTime={setTime} />
        <section>{
          tasks.map((item) => (
            <Itemm key={item.id} item={item} deleteTask={deleteTask} editTask={editTask} />
          ))
        }
        </section>
      </div>
    </div>
  );
}

export default App;
