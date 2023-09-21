import { useEffect, useState } from 'react'
import './Home.css'
import CardContainer from '../CardContainer/CardContainer'
import Empty from '../Empty/Empty'

const Home = ({ articles, filteredArticles, searching }) => {
  return (
    <>    
      {articles.length ? <section className='home'>  
        <div className='header-sort-container'>
          {searching ? <h1>Articles Based On Search</h1> : <h1>All Articles</h1> }
        </div>
        { searching ? <CardContainer articlesToDisplay={filteredArticles} /> : <CardContainer articlesToDisplay={articles} /> }
      </section>: <Empty />}
    </>
  )
}

export default Home