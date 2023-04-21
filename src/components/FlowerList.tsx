import FlowerListItem from "./FlowerListItem"
import PersonalizedFlowerListItem from "./PersonalizedFlowerListItem"

function FlowerList() : JSX.Element {
  return (
    <div className='container'>
       <div className='flower-container bg-gray-200'>
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
