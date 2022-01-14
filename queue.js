const queue = (func, waitTime) => {
  const funcQueue = [];
  let isWaiting;

  const executeFunc = (params) => {
    isWaiting = true;
    func(params);
    setTimeout(play, waitTime);
  };

  const play = () => {
    isWaiting = false;
    if (funcQueue.length) {
      const params = funcQueue.shift();
      executeFunc(params);
    }
  };

  return (params) => {
    isWaiting ? funcQueue.push(params) : executeFunc(params);
  };
};

const el = document.querySelector("input");

const log = (value) => console.log("RESULT:", value);
const queuedLog = queue(log, 2000);

el.addEventListener("input", (e) => queuedLog(e.target.value));
