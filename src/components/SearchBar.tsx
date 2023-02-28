import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar() : JSX.Element {
  return (
    <div className='search-container'>
      <div className='input-div'>
        <input type="text" placeholder='Looking for something specific?'/>
        <AiOutlineSearch className='search-icon' />
      </div>
    </div>
  )
}

export default SearchBar
