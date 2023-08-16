import { List } from '../layouts/List'
import TaskListItem from './TaskListItem'

function TaksList({ tasks, onTaksDeleteClick = () => {} }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <TaskListItem
          key={index}
          id={task.id}
          isCompleted={task.isCompleted}
          description={task.description}
          actPomodoros={task.actPomodoros}
          estimatedPomodoros={task.estimatedPomodoros}
          onDeleteClick={onTaksDeleteClick}
        />
      ))}
    </List>
  );
}
export default TaksList