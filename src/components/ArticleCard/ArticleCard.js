import { Link } from 'react-router-dom'
import './ArticleCard.css'
import formatDate from '../../helperFunctions'

const ArticleCard = ({ title, source, date, imgSrc }) => {
  return (
    <Link to={`/article/${title}`} className='article-card' key={title} >
      <div className='card-details' >
        <h1>{title}</h1>
        <h2>Source: {source}</h2>
        <p>Published on {formatDate(date)}</p>
      </div>
      <div className='img-container'>
        <img src={imgSrc} alt='Article image' />
      </div>
    </Link>
  )
}

export default ArticleCard