import { styled } from "@stitches/react"
import { Box } from "./layouts/Box"
import { rebootCss } from "./styles/reboot"
import TaksList from "./components/TaksList";
import { Button } from "./layouts/Button";
import TimerDisplay from "./components/Timer";
import TimerProgress from "./components/TimerProgress";
import Controlls from "./components/Controlls";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { settings } from "./configs/settings";

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

const pomodoroCycle = [
  'pomodoro',
  'short-break',
  'pomodoro',
  'short-break',
  'pomodoro',
  'short-break',
  'pomodoro',
  'long-break',
]

const durationMap = new Map([
  ['pomodoro', settings.pomodoroDurationInSeconds],
  ['short-break', settings.shortBreakDurationInSeconds],
  ['long-break', settings.longBreakDurationInSeconds]
])

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [remainingSeconds, setRemainingSeconds] = useState(settings.pomodoroDurationInSeconds);
  const [currentStep, setCurrentStep] = useState(0)
  const stepPosition = currentStep % pomodoroCycle.length

  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTaksFormSubmit = ({ form }) => {
    if (!!form.description && !!form.estimatedPomodoros) {
      addTask(form)
    }
  }

  function handleTimerToggle() {
    setIsTimerRunning(prev => !prev)
  }

  function getCurrentStepDuration() {
    return durationMap.get(pomodoroCycle[stepPosition])
  }
  

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      let remainingTime = getCurrentStepDuration()
      
      interval = setInterval(() => {
        if (remainingTime <= 0){
          advanceStep()
          clearInterval(interval)
        } else { 
          setRemainingSeconds(prev => prev - 1)
          remainingTime -= 1;
        }
      }, 300); // Run every 1000ms (1 second)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning, stepPosition]);

  const advanceStep = () => {
    const nextStep = pomodoroCycle[(currentStep + 1) % 8]
    setRemainingSeconds(durationMap.get(nextStep))
    setCurrentStep(prev => prev + 1)
  }

  return (
    <AppGrid>
      <Box>
        <TimerDisplay 
          currentStep={pomodoroCycle[stepPosition]} 
          remainingSeconds={remainingSeconds} 
        />
        <TimerProgress
          totalSeconds={getCurrentStepDuration()}
          remainingSeconds={remainingSeconds}
        />
        <Controlls isTimerRunning={isTimerRunning} onTimerToggle={handleTimerToggle} />
      </Box>
      <Box>
        <AddTaskButton onClick={openModal}>Adicionar Tarefa</AddTaskButton>
        <TaksList tasks={tasks} />
      </Box>
      <Modal
        isModalOpen={isModalOpen}
        onModalClose={closeModal}
        onTaksFormSubmit={handleTaksFormSubmit}
      />
    </AppGrid>
  );
}

export default App
