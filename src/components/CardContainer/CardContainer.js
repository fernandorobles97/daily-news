import ArticleCard from '../ArticleCard/ArticleCard'
import './CardContainer.css'

const CardContainer = ({ articlesToDisplay }) => {
  const allArticleCards = articlesToDisplay.map(article => {
    return (
      <ArticleCard
        key={article.title}
        title={article.title}
        source={article.source.name}
        date={article.publishedAt}
        imgSrc={article.urlToImage}
       />)
  })

  return (
    <div className='card-container'>
      {articlesToDisplay.length ? allArticleCards : <h1>Sorry, there's no articles found based on your search!</h1>}
    </div>
  )
}

export default CardContainer