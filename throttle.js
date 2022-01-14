const throttle = (func, waitTime) => {
  let timeout = null;
  let previous = 0;

  const later = () => {
    previous = Date.now();
    timeout = null;
    func();
  };

  return () => {
    const now = Date.now();
    const remaining = waitTime - (now - previous);

    if (remaining <= 0 || remaining > waitTime) {
      if (timeout) {
        clearTimeout(timeout);
      }
      later();
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
};

const el = document.querySelector("input");

const log = () => console.log("RESULT:", el.value);

el.addEventListener("input", throttle(log, 2000));
