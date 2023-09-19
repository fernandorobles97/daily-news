import { useEffect } from 'react'
import './ArticleDetails.css'
import { useLocation } from 'react-router-dom'

const ArticleDetails = ({ currentArticle, updateCurrentArticle }) => {
  const location = useLocation().pathname.slice(1).replaceAll('%20', ' ')

  useEffect(() => {
    updateCurrentArticle(location)
  }, [])

  return (
  <div className='article-details'>
    <h1>{currentArticle.title}</h1>
    <div className='author-and-source'>
      <h2>{currentArticle.author}</h2>
      <h2>{currentArticle.source}</h2>
    </div>
    <p>{currentArticle.content}</p>
    <img src={currentArticle.urlToImage} />
    <p>{currentArticle.publishedAt}</p>
  </div>)
}

export default ArticleDetails