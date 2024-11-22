import { useState, useEffect } from 'react';

type UseTimerReturn = {
  isRunning: boolean;
  startTimer: () => void;
};

/**
 * A custom React hook that provides a simple timer functionality.
 *
 * This hook allows you to start a timer that will automatically set
 * its state to not running after a specified duration in milliseconds.
 *
 * @param {number} ms - The duration in milliseconds for which the timer should run.
 *
 * @returns {UseTimerReturn} An object containing:
 *  - isRunning: A boolean indicating whether the timer is currently running.
 *  - startTimer: A function to start the timer.
 *
 * @example
 *
 * const TimerComponent = () => {
 *   const { isRunning, startTimer } = useTimer(5000); // 5 seconds
 *
 *   return (
 *     <div>
 *       <p>Timer is {isRunning ? 'running' : 'not running'}</p>
 *       <button onClick={startTimer}>Start Timer</button>
 *     </div>
 *   );
 * };
 *
 * @see https://reactjs.org/docs/hooks-effect.html
 *
 * @usage
 * Call `startTimer` to initiate the timer. Once the specified time has
 * elapsed, the `isRunning` state will automatically be set to false.
 *
 * Note: The timer will be cleared if the component using this hook
 * unmounts or if the timer is restarted before the previous timer
 * has completed.
 */
const useTimer = (ms: number): UseTimerReturn => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (isRunning) {
      timerId = setTimeout(() => {
        setIsRunning(false);
      }, ms);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [isRunning, ms]);

  const startTimer = () => setIsRunning(true);

  return { isRunning, startTimer };
};

export default useTimer;
