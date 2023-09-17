import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ title, source, date, imgSrc }) => {
  const formatDate = (data) => {
    let month = data.slice(5, 7)
    let day = data.slice(8, 10)
    let year = data.slice(0, 4)

    return `${month}/${day}/${year}`
  }

  return (
    <Link to={`/${title}`} className='article-card' key={title} >
      <div className='article-details' >
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