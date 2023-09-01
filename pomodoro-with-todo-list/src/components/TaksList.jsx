import { List } from '../layouts/List'
import TaskListItem from './TaskListItem'

function TaksList({ 
  tasks = [], 
  onTaskDeleteClick = () => {}, 
  onTaskSelectClick = () => {}, 
  onFinishTaskClick = () => {},
  selectedTaskId = "",
}) {
  return (
    <List>
      {tasks.map((task, index) => (
        <TaskListItem
          key={index}
          id={task.id}
          description={task.description}
          actPomodoros={task.actPomodoros}
          estimatedPomodoros={task.estimatedPomodoros}
          onDeleteClick={onTaskDeleteClick}
          onClick={onTaskSelectClick}
          isSelected={task.id === selectedTaskId}
          onFinishClick={onFinishTaskClick}
          isFinished={!!task?.isFinished}
        />
      ))}
    </List>
  );
}
export default TaksList