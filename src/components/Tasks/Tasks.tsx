/* VENDOR */
import { useAppSelector } from "../../app/hooks";
import { selectAllTasks } from "../../app/tasks/tasksSlice";
import { ListItem } from "../ListItem/ListItem";

/* APPLICATION */

export const Tasks: React.FC = () => {
  const tasks = useAppSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
