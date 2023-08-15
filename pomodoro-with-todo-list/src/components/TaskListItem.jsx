import React from 'react'

import { ListItem } from "../layouts/ListItem"
import Task from './Task'

function TaskListItem(props) {
  return (
    <ListItem>
      <Task {...props} />
    </ListItem>
  )
}

export default TaskListItem