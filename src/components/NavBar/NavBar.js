import './NavBar.css'
import logo from '../../images/logo.png'
import search from '../../images/search-icon.png'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='logo for the daily news' />
      <div className='searchbar'>
        <input className='search-input' placeholder='Search By Keyword...'></input>
        <button type='submit'> 
          <img className='search-icon' src={search} alt='symbol for search icon' /> 
        </button>
      </div>
    </nav>)
}

export default NavBar