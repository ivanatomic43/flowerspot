import FlowerListItem from "./FlowerListItem"
import PersonalizedFlowerListItem from "./PersonalizedFlowerListItem"
import "../styles/common/app-styles.css"

function FlowerList(): JSX.Element {
  return (
    <div className="full-size">
      <div className="flower-container container">
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
        <PersonalizedFlowerListItem />
      </div>
    </div>
  )
}

export default FlowerList
