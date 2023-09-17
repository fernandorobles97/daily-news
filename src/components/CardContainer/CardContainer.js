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
      {allArticleCards}
    </div>
  )
}

export default CardContainer