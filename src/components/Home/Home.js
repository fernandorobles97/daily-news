import { useEffect, useState } from 'react'
import './Home.css'
import CardContainer from '../CardContainer/CardContainer'

const Home = ({ articles, filteredArticles, searching }) => {
  const [sort, setSort] = useState(1)

  // let newArticles = articles.articles

  // console.log(newArticles)

  // const updateSort = (value) => {
  //   setSort(value)
  //   console.log('fun', typeof sort)
  //   return articles.sort((a, b) => {
  //     let date1 = new Date(a.publishedAt)
  //     let date2 = new Date(b.publishedAt)
  //     if (value === 1) {
  //       return date2 - date1
  //     } else  {
  //       return date1 - date2
  //     }
  //   })
  // }

  // useEffect(() => {
  //    let sortedByOldest = newArticles.sort((a, b) => {
  //     let date1 = new Date(a.publishedAt)
  //     let date2 = new Date(b.publishedAt)
  //     if (sort === 1) {
  //       return date2 - date1
  //     } else if (sort === '2') {
  //       return date1 - date2
  //     }
  //   })
  // },[sort])



  // console.log('sort',sorted)

  return (
    <section className='home'>
      <div className='header-sort-container'>
        {searching ?<h1>Articles based on search</h1> : <h1>All Articles</h1> }
        {/* <div className='sort-by'>
          <h2>Sort By: </h2>
          <select value={sort}  className='select-sort' onChange={e => setSort(e.target.value)}>
            <option value={1}>Newest</option>
            <option value={2}>Oldest</option>
          </select>
        </div> */}
      </div>
      {searching ? <CardContainer articlesToDisplay={filteredArticles} /> : <CardContainer articlesToDisplay={articles} searching={searching} /> }
    </section>
  )
}

export default Home