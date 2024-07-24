import FlowerList from "../components/FlowerList"
import SearchBar from "../components/SearchBar"
import { Text, Container, Separator } from "../common"

import "../styles/common/app-styles.css"
import backgroundImage from "../images/background.jpg"

export default function Homepage(): JSX.Element {
  return (
    <>
      <Container height={600} backgroundImage={backgroundImage}>
        <Separator height={170} />
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
      <FlowerList />
    </>
  )
}
