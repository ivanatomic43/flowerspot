import FlowerListItem from "./FlowerListItem"

function FlowerList() : JSX.Element {
  return (
    <div className='container'>
       <div className='flower-container'>
        <FlowerListItem />
        <FlowerListItem />
        <FlowerListItem />
        <FlowerListItem />
      </div>
    </div>
  )
}

export default FlowerList
