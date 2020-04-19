export const requiredField = (value) => {
  if (value) {
    return undefined
  } else {
    return 'Field is required'
  }
}

export const maxLengthCreator = (maxLengths) => (value) => {
  if (value.length > 30) {
    return `Max length is ${maxLengths}`
  } else {
    return undefined
  }
}
