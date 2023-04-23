import flower from '../images/flower.jpg'
import avatar from '../images/avatar.jpg'
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function PersonalizedFlowerListItem() {
  return (
    <div className='flex flex-col m-6 card-custom'>
      <div className='bg-red-200'>
        <img src={flower} alt="flower" className='personal-image-div w-full' />
       
      </div>
      <div className='bg-white'>
        <div className='flex flex-row text-center w-full m-5'>
          <img src={avatar} alt="avatar" className='img-avatar mr-5 w-12 h-12'/>
          <div className='text-left'>
            <h2 className='text-[#334144]'>Balcony Flower</h2>
            <p className='text-xs text-[#949EA0] italic'>by Ivana Tomic</p>
          </div>
        </div>
        <p className="text-xs m-5 text-[#949EA0] text-justify">Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων "bell")is a species of herbaceous flowering</p>
        <div className='border-b-2 w-5/6 m-auto'></div>
        <div className='flex flex-row justify-between p-4 m-1'>
          <div className='flex flex-row'>
            <FaCommentDots className='text-[#D4D8D9]' />
            <p className='text-xs text-[#949EA0] ml-2'>18 comments</p>
          </div>
          <div className='flex flex-row'>
            <FaHeart className='text-[#D4D8D0]' />
            <p className='text-xs text-[#949EA0] ml-2'>12 Favorites</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row text-center bg-white text-[#DF9186] absolute m-5 p-0 w-40 rounded-xl'>
        <IoLocationSharp className='m-1 text-xl'/>
        <p className='text-sm mt-1 font-medium'>San Francisco, US</p>
      </div>
    </div>
  )
}

export default PersonalizedFlowerListItem
