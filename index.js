function superbowlWin(array) {

  const winYear = array.find(element => element.result === 'W')

  if (winYear) {
    return winYear.year
  }
  else {
    return undefined
  }
}

