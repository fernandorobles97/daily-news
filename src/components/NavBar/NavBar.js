import './NavBar.css'
import logo from '../../images/logo.png'
import search from '../../images/search-icon.png'
import { useEffect, useState } from 'react'

const NavBar = ({ articles, updateFilteredArticles, updateSearching }) => {
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

  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='logo for the daily news' />
      <form action='/' className='searchbar' method="get">
        <label><h1>Search: </h1></label>
        <input className='search-input' type='text' placeholder='Search By Keyword...' onChange={e => setSearchInput(e.target.value)}  value={searchInput} ></input>
        {/* <button type='submit'onClick={updateArticles}> 
          <img className='search-icon' src={search} alt='symbol for search icon' /> 
        </button> */}
      </form>
    </nav>)
}

export default NavBar