import { useEffect, useState } from 'react'
import './Home.css'
import CardContainer from '../CardContainer/CardContainer'

const Home = ({ articles, filteredArticles, searching }) => {
  return (
    <section className='home'>
      <div className='header-sort-container'>
        {searching ?<h1>Articles Based On Search</h1> : <h1>All Articles</h1> }
      </div>
      {searching ? <CardContainer articlesToDisplay={filteredArticles} /> : <CardContainer articlesToDisplay={articles} /> }
    </section>
  )
}

export default Home