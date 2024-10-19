import "../styles/common/app-styles.css"
import FlowerListItem from "./FlowerListItem"
import flower from "../images/flower.jpg"

function FlowerList(): JSX.Element {
  const flowerList = [
    {
      imageSrc: flower,
    },
    {
      imageSrc: flower,
    },
    {
      imageSrc: flower,
    },
  ]

  return (
    <div className="full-size">
      <div className="flower-container container">
        {flowerList.map((item) => {
          return <FlowerListItem imageSrc={item.imageSrc} />
        })}
      </div>
    </div>
  )
}

export default FlowerList
