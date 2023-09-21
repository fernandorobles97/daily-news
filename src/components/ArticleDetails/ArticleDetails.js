import { useEffect } from 'react'
import './ArticleDetails.css'
import { useLocation } from 'react-router-dom'
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
          {currentArticle.author}
        </div>
        <div className='author-source-container'>
          <h2>Source:</h2>
          {currentArticle.source}
        </div>
      </div>
      <div className='description-container'>
        <h2>Description</h2>
        <p className='article-description'>{currentArticle.content}</p>
      </div>
      <img src={currentArticle.urlToImage} />
      <p>Published on {currentArticle.publishedAt}</p>
      </div> : <Empty />}
    </>
)}

export default ArticleDetails