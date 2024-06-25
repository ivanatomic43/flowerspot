import FlowerList from "../components/FlowerList"
import SearchBar from "../components/SearchBar"
import Text from "../common/Text"

import "../styles/common/app-styles.css"

// TODO: Refactor homepage & styles related to it

export default function Homepage(): JSX.Element {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <div className="homepage-content">
            <Text color="app-white" type="title.h1">
              Discover flowers around you
            </Text>

            <p className="homepage-text">
              Explore between more than 8.427 sightings
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
      <FlowerList />
    </>
  )
}
