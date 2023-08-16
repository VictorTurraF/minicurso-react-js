import { styled } from "@stitches/react"
import { rebootCss } from "./styles/reboot"

import { useEffect, useState } from "react";
import { settings } from "./configs/settings";
import TimerContainer from "./components/TimerContainer";
import TaskContainer from "./components/TaskContainer";
import useList from "./hooks/useList";

import localforage from "localforage";

const AppGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: "4fr 6fr",
  gridGap: "2rem",
  maxWidth: "1000px",
  margin: "3rem auto",
})

rebootCss();

const pomodoroSteps = [
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
  var taskTable = localforage.createInstance({
    name: "site-data",
    storeName: "tasks",
    description: "Task list",
  });

  var configsTable = localforage.createInstance({
    name: "site-data",
    storeName: 'configs',
    description: 'Application settings'
  })

  const {
    list: tasks,
    addItem: addTask,
    removeItemByField: removeTaskBy,
    setList: setTasks
  } = useList([])

  const [selectedTask, setSelectedTask] = useState('');

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
      .getItem('selectedTask')
      .then(value => setSelectedTask(value))
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
      />
    </AppGrid>
  );
}

export default App
