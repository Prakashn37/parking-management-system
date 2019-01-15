// Get visible expenses

export default (carList, { text }) => {
  return carList.filter((car) => {
    const textMatch = car.description.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
};
