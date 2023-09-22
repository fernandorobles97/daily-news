const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`Error: ${response.status} -- Please try again!`)
  }
  return response.json()
}

const getAllArticles = async() => {
  let response = await fetch('https://newsapi.org/v2/everything?q=texas&from=2023-09-16&to=2023-09-22&sortBy=popularity&pageSize=50&apiKey=a414268d521d4b3c85746447a4724c87')
  let data = await handleError(response)
  return data.articles
}

export default getAllArticles