import { Row } from "../layouts/Row"

function Task({
  id = "",
  isCompleted = false,
  description = "",
  estimatedPomodoros = 0,
  actPomodoros = 0
}) {

  return (
    <Row>
      <input name={id} type="checkbox" onChange={() => {}} checked={isCompleted} />
      <span>{description}</span>
      <span>{actPomodoros}/{estimatedPomodoros}</span>
    </Row>
  )
}

export default Task