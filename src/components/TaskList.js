import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSliceReducer";

const TaskList = () => {
  const tasks = useSelector((state) => state?.todo?.tasks);
  const dispatch = useDispatch();

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3 className="font-bold text-2xl">Your tasks:</h3>
        <br/>
        <ul className="tasks">
          {tasks?.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;