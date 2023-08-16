import { useEffect, useState } from "react";
import { styled } from "@stitches/react"
import { rebootCss } from "./styles/reboot"
import { durationMap, pomodoroSteps, settings } from "./configs/settings";
import { configsTable, taskTable } from "./configs/storages";
import TimerContainer from "./components/TimerContainer";
import TaskContainer from "./components/TaskContainer";
import useList from "./hooks/useList";

const AppGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: "4fr 6fr",
  gridGap: "2rem",
  maxWidth: "1000px",
  margin: "3rem auto",
})

rebootCss();

function App() {
  const {
    list: tasks,
    setList: setTasks,
    addItem: addTask,
    removeItemByField: removeTaskBy,
    updateItemByField: updateTaskBy
  } = useList([])

  const [selectedTaskId, setSelectedTaskId] = useState();

  const [remainingSeconds, setRemainingSeconds] = useState(settings.pomodoroDurationInSeconds);
  const [currentStep, setCurrentStep] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  const stepPosition = currentStep % pomodoroSteps.length

  function handleTimerToggle() {
    setIsTimerRunning(prev => !prev)
  }

  function getCurrentStepDuration() {
    return durationMap.get(pomodoroSteps[stepPosition])
  }

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      let remainingTime = remainingSeconds

      interval = setInterval(() => {

        if (remainingTime <= 0) {
          advanceStep()
          clearInterval(interval)

        } else {
          setRemainingSeconds(prev => prev - 1)
          remainingTime -= 1;
        }

      }, 300);

    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning, stepPosition]);

  const advanceStep = () => {
    if (pomodoroSteps[stepPosition] === "pomodoro") {
      const selectedTask = tasks.find(task => task.id === selectedTaskId);
      updateTaskBy('id', selectedTaskId, { 
        ...selectedTask, 
        actPomodoros: selectedTask.actPomodoros + 1 
      })
    }

    const nextStep = pomodoroSteps[(currentStep + 1) % 8]
    setRemainingSeconds(durationMap.get(nextStep))
    setCurrentStep(prev => prev + 1)

  }

  const handleTaksFormSubmit = ({ form: task }) => {
    if (!!task.description && !!task.estimatedPomodoros) {
      addTask(task);
      taskTable.setItem(task.id, task)
    }
  }

  const handleFinishStepClick = () => {
    advanceStep()
  }

  const handleTaskDeleteClick = ({ taskId }) => {
    removeTaskBy('id', taskId);
    taskTable.removeItem(taskId)
  }

  const handleTaskSelectClick = ({ taskId }) => {
    setSelectedTaskId(taskId)
    configsTable.setItem('selectedTaskId', taskId)
  }

  useEffect(() => {
    const tasks = []
    taskTable
      .iterate((value, key) => {
        tasks.push(value)
      })
      .then(() => {
        setTasks(tasks);
      });
  }, [])

  useEffect(() => {
    configsTable
      .getItem('selectedTaskId')
      .then(value => setSelectedTaskId(value))
  }, [])

  return (
    <AppGrid>
      <TimerContainer
        isTimerRunning={isTimerRunning}
        step={pomodoroSteps[stepPosition]}
        fullStepDuration={getCurrentStepDuration()}
        remainingSeconds={remainingSeconds}
        onTimerToggle={handleTimerToggle}
        onFinishStepClick={handleFinishStepClick}
      />
      <TaskContainer
        tasks={tasks}
        onTaskFormSubmit={handleTaksFormSubmit}
        onTaskDeleteClick={handleTaskDeleteClick}
        onTaskSelectClick={handleTaskSelectClick}
        selectedTaskId={selectedTaskId}
      />
    </AppGrid>
  );
}

export default App
