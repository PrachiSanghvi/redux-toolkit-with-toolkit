import Header from "./components/Header";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="App">
      <h1 className="font-bold underline text-blue font-custom text-4xl">
        Creative Craft
      </h1>
      <Header/>
      <h1 className="app__title font-bold text-3xl">Redux Tookit ToDo App</h1>
      <br/><br/>
      <Task />
      <br/><br/>
      <TaskList />
    </div>
  );
}

export default App;
