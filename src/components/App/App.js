import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import getAllArticles from '../../apiCalls';
import newsData from '../../newsData.json'
import formatDate from '../../helperFunctions';
import Empty from '../Empty/Empty';


const App = () => {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [currentArticle, setCurrentArticle] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searching, setSearching] = useState(false)

  const updateSearching = (value) => {
    setSearching(value)
  }

  const updateFilteredArticles = (articleData) => {
    setFilteredArticles(articleData)
  }

  const updateCurrentArticle = (title) => {
    let foundArticle = articles.find(article => article.title === title)
    if (!foundArticle) {
      return null
    }
    const newArticle = { ...foundArticle, source: foundArticle.source.name, publishedAt: formatDate(foundArticle.publishedAt) }
    setCurrentArticle(newArticle)
  }

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      try {
        setArticles(await getAllArticles())
        setLoading(false)
      }catch(error) {
        setError(error)
      }
      setLoading(false)
    } 
    apiCall()
  }, [])

  return (
    <div className="App">
      <NavBar searching={searching} articles={articles} updateFilteredArticles={updateFilteredArticles} filteredArticles={filteredArticles} updateSearching={updateSearching} />
      <Routes>
        <Route path='/' element={error ? <Empty errorMessage={'There seems to be an issue, please try again later!'} /> : <Home filteredArticles={filteredArticles} articles={articles} searching={searching} loading={loading} />} />
        <Route path='/article/:title' element={<ArticleDetails currentArticle={currentArticle} updateCurrentArticle={updateCurrentArticle} error={error} /> } />
        <Route path={'/*'} element={<Empty errorMessage={'This page does not exist, please go back!'} />} />
      </Routes>
    </div>
  );
}

export default App;
