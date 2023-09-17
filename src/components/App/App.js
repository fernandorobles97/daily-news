import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import getAllArticles from '../../apiCalls';
import newsData from '../../newsData.json'


const App = () => {
  const [articles, setArticles] = useState(newsData.articles)
  const [filteredArticles, setFilteredArticles] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)

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

  return (
    <div className="App">
      <NavBar articles={articles} updateFilteredArticles={updateFilteredArticles} filteredArticles={filteredArticles} updateSearching={updateSearching} />
      <Routes>
        <Route path='/' element={<Home filteredArticles={filteredArticles} articles={articles} searching={searching} />} />
        <Route path='/:article' element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
