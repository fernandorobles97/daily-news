import ArticleCard from '../ArticleCard/ArticleCard'
import './CardContainer.css'

const CardContainer = ({ articles }) => {
  const allArticleCards = articles.map(article => {
    return (
      <ArticleCard
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