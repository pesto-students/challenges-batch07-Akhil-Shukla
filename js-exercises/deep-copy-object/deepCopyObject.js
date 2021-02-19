const deepCopyObject = (n) => {
  if (n) {
    return JSON.parse(JSON.stringify(n));
  }

  return null;
};

export { deepCopyObject };
