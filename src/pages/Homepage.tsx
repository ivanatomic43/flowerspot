import FlowerList from "../components/FlowerList"
import SearchBar from "../components/SearchBar"
import { Text, Container, Separator } from "../common"

import "../styles/common/app-styles.css"
import backgroundImage2 from "../images/background2.jpg"
import backgroundImage3 from "../images/background3.jpg"
import Carousel from "../common/Carousel"

export default function Homepage(): JSX.Element {
  const images = [backgroundImage2, backgroundImage3]

  return (
    <>
      <Carousel images={images}>
        <Container height={600}>
          <Container
            divStyle={{
              textAlign: "center",
              borderRadius: "25px",
              marginLeft: 180,
              marginRight: 180,
            }}
          >
            <Text color="color-5" type="title.h1">
              Discover flowers around you
            </Text>
            <Text color="color-5" type="body.medium">
              Explore between more than 8.427 sightings
            </Text>
            <Separator height={50} />
            <SearchBar />
            <Separator height={30} />
          </Container>
        </Container>
      </Carousel>
      <FlowerList />
    </>
  )
}
