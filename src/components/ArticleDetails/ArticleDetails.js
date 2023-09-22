import { useEffect } from 'react'
import './ArticleDetails.css'
import { Link, useLocation } from 'react-router-dom'
import Empty from '../Empty/Empty'

const ArticleDetails = ({ currentArticle, updateCurrentArticle }) => {
  const location = useLocation().pathname.slice(9).replaceAll('%20', ' ')

  useEffect(() => {
    updateCurrentArticle(location)
  }, [])

  return (
    <>
      {currentArticle ? <div className='article-details'>
      <h1>{currentArticle.title}</h1>
      <div className='author-and-source'>
        <div className='author-source-container'>
          <h2>Author:  </h2>
          <p>{currentArticle.author}</p>
        </div>
        <div className='author-source-container'>
          <h2>Source:</h2>
          <p>{currentArticle.source}</p>
        </div>
      </div>
      <div className='description-container'>
        <h2>Description</h2>
        <p className='article-description'>{currentArticle.content.slice(0, 200)} <Link to={currentArticle.url} className='article-link'>Click here to read more!</Link></p>
      </div>
      <img src={currentArticle.urlToImage} />
      <p>Published on {currentArticle.publishedAt}</p>
      </div> : <Empty />}
    </>
)}

export default ArticleDetails