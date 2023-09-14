import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ title, source, date, imgSrc }) => {
  return (
    <Link className='article-card' >
      <div className='article-details' >
        <h1>{title}</h1>
        <h2>Source: {source}</h2>
        <p>Published on {date}</p>
      </div>
      <div className='img-container'>
        <img src={imgSrc} alt='Article image' />
      </div>
    </Link>
  )
}

export default ArticleCard