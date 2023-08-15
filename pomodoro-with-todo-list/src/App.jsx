import { styled } from "@stitches/react"
import { Box } from "./layouts/Box"
import { rebootCss } from "./styles/reboot"
import TaksList from "./components/TaksList";
import { Button } from "./layouts/Button";
import TimerDisplay from "./components/Timer";
import TimerProgress from "./components/TimerProgress";
import Controlls from "./components/Controlls";
import { useState } from "react";
import Modal from "./components/Modal";

const AppGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: "6fr 4fr",
  gridGap: "2rem",
  maxWidth: "1000px",
  margin: "3rem auto",
})

const AddTaskButton = styled(Button, {
  marginBottom: "1rem"
})

rebootCss();

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (task) => {
    addTask(task);
    closeModal();
  };

  return (
    <AppGrid>
      <Box>
        <TimerDisplay />
        <TimerProgress />
        <Controlls />
      </Box>
      <Box>
        <AddTaskButton onClick={openModal}>Adicionar Tarefa</AddTaskButton>
        <TaksList tasks={tasks} />
      </Box>
      <Modal 
        isModalOpen={isModalOpen} 
        onModalClose={closeModal} 
        onTaksFormSubmit={handleModalSubmit} 
      />
    </AppGrid>
  );
}

export default App
