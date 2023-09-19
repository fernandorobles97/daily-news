const formatDate = (data) => {
  let month = data.slice(5, 7)
  let day = data.slice(8, 10)
  let year = data.slice(0, 4)

  return `${month}/${day}/${year}`
}

export default formatDate