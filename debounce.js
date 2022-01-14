const debounce = (func, waitTime) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, waitTime);
  };
};

const el = document.querySelector("input");

const log = () => console.log("RESULT:", el.value);

el.addEventListener("input", debounce(log, 500));
