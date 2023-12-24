'use client';

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(false);

  function start() {
    if (intervalId) {
      return;
    }
    setIntervalId(true);
  }

  function stop() {
    if (!intervalId) {
      return;
    }
    setIntervalId(false);
  }

  useEffect(() => {
    if (!intervalId) {
      return;
    }
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [intervalId]);

  return (
    <div className='flex flex-col'>
      <div className=''>{count}</div>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
    </div>
  );
};

export default Page;
