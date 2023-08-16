import React from 'react'
import TaksList from './TaksList';
import { Box } from '../layouts/Box';
import Modal from './Modal';
import { styled } from '@stitches/react';
import { Button } from '../layouts/Button';
import TaskForm from './TaksForm';
import useModal from '../hooks/useModal';

const AddTaskButton = styled(Button, {
  marginBottom: "1rem"
})

function TaskContainer({ 
  tasks = [], 
  onTaskFormSubmit = () => {}, 
  onTaskDeleteClick = () => {},
  onTaskSelectClick = () => {},
  selectedTaskId = "",
}) {
  const { modalProps, closeModal, openModal } = useModal();

  return (
    <>
      <Box>
        <AddTaskButton onClick={openModal}>Adicionar Tarefa</AddTaskButton>
        <TaksList
          tasks={tasks}
          onTaskDeleteClick={onTaskDeleteClick}
          onTaskSelectClick={onTaskSelectClick}
          selectedTaskId={selectedTaskId}
        />
      </Box>
      <Modal {...modalProps}>
        <TaskForm onCloseClick={closeModal} onSubmit={onTaskFormSubmit} />
      </Modal>
    </>
  )
}

export default TaskContainer