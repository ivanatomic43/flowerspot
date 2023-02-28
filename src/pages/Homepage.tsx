import FlowerList from "../components/FlowerList"
import SearchBar from "../components/SearchBar"

export default function Homepage() : JSX.Element {
  return (
    <>
    <div className="homepage">
      <div className='container'>
        <div className='homepage-content'>
          <h1 className="homepage-title">Discover flowers around you</h1>
          <p className="homepage-text">Explore between more than 8.427 sightings</p>
          <SearchBar />
        </div>
      </div>
    </div>
    <FlowerList />
    </>
  )
}
