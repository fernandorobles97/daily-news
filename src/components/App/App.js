import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import getAllArticles from '../../apiCalls';
import newsData from '../../newsData.json'
import SearchResults from '../SearchResults/SearchResults';

// const reviseTitles = (articleData) => {
//   // tried to lowercase article data as it was fetched but returned as undefined; found that lowecasing the titles in input change function worked better w/o issues
//   return articleData.forEach(article => article.title.toLowerCase())
// }

const App = () => {
  const [articles, setArticles] = useState(newsData.articles)
  const [filteredArticles, setFilteredArticles] = useState([])
  const [articlesToDisplay, setArticlesToDisplay] = useState(newsData.articles)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)

  console.log('art', articles)

  const updateSearching = (value) => {
    setSearching(value)
  }

  const updateFilteredArticles = (articleData) => {
    setFilteredArticles(articleData)
  }

  // useEffect(() => {

  // }, [filteredArticles.length])

  // useEffect(() => {
  //   const apiCall = async () => {
  //     setLoading(true)
  //     try {
  //       setArticles(await getAllArticles())
  //       setLoading(false)
  //     }catch(error) {
  //       setError(error)
  //     }
  //     setLoading(false)
  //   } 
  //   apiCall()
  // }, [])
  console.log('app filt', filteredArticles)

  return (
    <div className="App">
      <NavBar articles={articles} updateFilteredArticles={updateFilteredArticles} filteredArticles={filteredArticles} updateSearching={updateSearching} />
      <Routes>
        <Route path='/' element={<Home articlesToDisplay={articlesToDisplay} filteredArticles={filteredArticles} articles={articles} searching={searching} />} />
        <Route path='/:article' element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
