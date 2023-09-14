import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const App = () => {
  const [articles, setArticles] = useState([])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:articleID' element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
