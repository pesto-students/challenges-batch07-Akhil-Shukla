/* eslint-disable indent */
function chunkArrayInGroups(array, chunkSize) {
  const result = array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

  return resultArray;
  }, []);

  return result;
}

export {
  chunkArrayInGroups,
};
