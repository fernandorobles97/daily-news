import './NavBar.css'
import logo from '../../images/logo.png'
import clear from '../../images/delete.png'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = ({ searching, articles, updateFilteredArticles, updateSearching }) => {
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    if (searchInput.length > 0) {
      updateSearching(true);
      return updateFilteredArticles(articles.filter(article => {
        return article.title.toLowerCase().includes(searchInput);
      }));
    } else {
      updateSearching(false)
    }
  },[searchInput])

  const clearSearch = (e) => {
    e.preventDefault()
    setSearchInput("")
  }

  return (
    <nav className='navbar'>
      <Link to={'/'}>      
        <img className='logo' src={logo} alt='logo for the daily news' /> 
      </Link> 
      {useLocation().pathname === '/' && <div className='searchbar' >
        <input className='search-input' type='text' placeholder='Search By Keyword...' onChange={(e) => setSearchInput(e.target.value)}  value={searchInput} ></input>
        {searching && <button type='submit' onClick={clearSearch}> 
          <img className='clear-icon' src={clear} alt='symbol for clear icon' /> 
        </button>}
      </div>}
    </nav>
  )}

export default NavBar