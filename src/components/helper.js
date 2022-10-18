export const getSum = (birds) => {
  const sum = birds.reduce((acc, curr) => {
    return (acc += curr.amount)
  }, 0)

  return sum
}
