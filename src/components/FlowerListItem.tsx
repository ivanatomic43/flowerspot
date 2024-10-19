import avatar from "../images/avatar.jpg"
import { FaCommentDots, FaHeart } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { Image, Text, Card, Separator } from "../common"

interface FlowerListItemProps {
  imageSrc: string
}

const FlowerListItem: React.FC<FlowerListItemProps> = ({ imageSrc }) => {
  return (
    <Card>
      <div className="bg-red-200">
        <Image imageSrc={imageSrc} />
      </div>

      <div className="flex flex-row text-center w-full m-5">
        <Image
          imageSrc={avatar}
          height={12}
          width={12}
          style="img-avatar mr-5"
        />
        <Text className="flex-1">
          <Text color="color-7" type="body.medium" alignment="left">
            Balcony Flower
          </Text>
          <Text color="text-dark-grey" type="body.small" alignment="left">
            by Ivana Tomic
          </Text>
        </Text>
      </div>
      <Text color="app-text" type="body.small" className="m-5">
        Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
        "bell")is a species of herbaceous flowering
      </Text>
      <Separator height={1.5} width="90%" backgroundColor="#D4D8D9" />
      <div className="flex flex-row justify-between p-4 m-1">
        <div className="flex flex-row">
          <FaCommentDots className="text-[#D4D8D9]" />
          <Text type="body.small" color="app-text" className="ml-2">
            18 comments
          </Text>
        </div>
        <div className="flex flex-row">
          <FaHeart className="text-[#D4D8D0]" />
          <Text type="body.small" color="app-text" className="ml-2">
            12 Favorites
          </Text>
        </div>
      </div>
      <div className="flex flex-row text-center bg-white absolute m-5 p-0 w-40 rounded-xl">
        <IoLocationSharp className="m-1 text-xl text-[#DF9186]" />
        <Text type="body.medium" className="mt-1" color="app-highlight">
          San Francisco, US
        </Text>
      </div>
    </Card>
  )
}
export default FlowerListItem
