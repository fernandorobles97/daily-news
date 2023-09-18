import { useEffect } from 'react'
import './ArticleDetails.css'
import { useLocation } from 'react-router-dom'

const ArticleDetails = ({ currentArticle, updateCurrentArticle }) => {
  const location = useLocation().pathname.slice(1).replaceAll('%20', ' ')

  useEffect(() => {
    updateCurrentArticle(location)
  }, [currentArticle])
  
  return (
  <div className='article-details'>
    <h1>{currentArticle.title}</h1>
  </div>)
}

export default ArticleDetails