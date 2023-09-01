import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { rebootCss } from "./styles/reboot";
import { durationMap, pomodoroSteps, settings } from "./configs/settings";
import { configsTable, taskTable } from "./configs/storages";
import TimerContainer from "./components/TimerContainer";
import TaskContainer from "./components/TaskContainer";
import useList from "./hooks/useList";

const AppGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "4fr 6fr",
  gridGap: "2rem",
  maxWidth: "1000px",
  margin: "3rem auto",
});

rebootCss();

function App() {
  const {
    list: tasks,
    setList: setTasks,
    addItem: addTask,
    removeItemByField: removeTaskBy,
    updateItemByField: updateTaskBy,
  } = useList([]);

  const [selectedTaskId, setSelectedTaskId] = useState();
  const [remainingSeconds, setRemainingSeconds] = useState(
    settings.pomodoroDurationInSeconds
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const stepPosition = currentStep % pomodoroSteps.length;

  function handleTimerToggle() {
    setIsTimerRunning((prev) => !prev);
  }

  function getCurrentStepDuration() {
    return durationMap.get(pomodoroSteps[stepPosition]);
  }

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      let remainingTime = remainingSeconds;

      interval = setInterval(() => {
        if (remainingTime <= 0) {
          incrementPomodoroAndAdvanceStep();
          clearInterval(interval);
        } else {
          setRemainingSeconds((prev) => prev - 1);
          remainingTime -= 1;
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isTimerRunning, stepPosition]);

  const incrementPomodoroAndAdvanceStep = () => {
    if (pomodoroSteps[stepPosition] === "pomodoro") {
      const selectedTask = tasks.find((task) => task.id === selectedTaskId);
      if (selectedTask) {
        incrementTaskActPomodoros(selectedTask)
      }
    }

    advanceStep()
  };

  const incrementTaskActPomodoros = (task) => {
    const newTask = {
      ...task,
      actPomodoros: task.actPomodoros + 1,
    }

    updateTaskBy("id", task.id, newTask);
    taskTable.setItem(task.id, newTask)
  }

  const advanceStep = () => {
    setRemainingSeconds(durationMap.get(pomodoroSteps[(currentStep + 1) % 8]));
    setCurrentStep((prev) => prev + 1);
  }

  const handleTaksFormSubmit = ({ form: task }) => {
    if (task.description && task.estimatedPomodoros) {
      const taskId = addTask(task);
      taskTable.setItem(taskId, task);
    }
  };

  const handleFinishStepClick = () => {
    incrementPomodoroAndAdvanceStep();
  };

  const handleFinishTaskClick = ({ taskId }) => {
    updateTaskBy('id', taskId, (prev) => ({ 
      ...prev,
      isFinished: !prev?.isFinished
    }))
  }

  const handleTaskDeleteClick = ({ taskId }) => {
    removeTaskBy("id", taskId);
    taskTable.removeItem(taskId);
  };

  const handleTaskSelectClick = ({ taskId }) => {
    setSelectedTaskId(taskId);
    configsTable.setItem("selectedTaskId", taskId);
  };

  useEffect(() => {
    const tasks = [];

    taskTable
      .iterate((value) => {
        tasks.push(value);
      })
      .then(() => {
        setTasks(tasks);
      });
  }, []);

  useEffect(() => {
    configsTable
      .getItem("selectedTaskId")
      .then((value) => value && setSelectedTaskId(value));
  }, []);

  useEffect(() => {
    configsTable
      .getItem('finishedTasks')
      .then(value => value && setFinishedTasks(value))
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
        onFinishTaskClick={handleFinishTaskClick}
      />
    </AppGrid>
  );
}

export default App;
