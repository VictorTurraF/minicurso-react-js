import { Row } from "../layouts/Row"

function Task({
  isCompleted = false,
  description = "",
  estimatedPomodoros = 0,
  actPomodoros = 0
}) {
  return (
    <Row>
      <input type="checkbox" checked={isCompleted} />
      <span>{description}</span>
      <span>{actPomodoros}/{estimatedPomodoros}</span>
    </Row>
  )
}

export default Task