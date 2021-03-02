const limitFunctionCallCount = (callback, maxCalls) => {
  let counter = 0;

  return (...args) => {
    if (counter < maxCalls) {
      counter += 1;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };