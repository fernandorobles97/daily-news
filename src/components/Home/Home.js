import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [sort, setSort] = useState(1)
  return (
    <section className='home'>
      <div className='header-sort-container'>
        <h1>All Articles</h1>
        <div className='sort-by'>
          <h2>Sort By: </h2>
          <select value={sort} className='select-sort'>
            <option value={1}>Newest</option>
            <option value={2}>Oldest</option>
          </select>
        </div>
      </div>
      <p>articles will appear here</p>
    </section>
  )
}

export default Home