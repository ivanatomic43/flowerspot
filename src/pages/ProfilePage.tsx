import Button from '../common/Button'

import FlowerList from '../components/FlowerList'
import { useAuthStatus } from '../hooks/useAuthStatus'

import avatar from '../images/avatar.jpg'

function ProfilePage() : JSX.Element {

  const { currentUser } = useAuthStatus();

  return (
    <>
     { currentUser && (
      <div className="container">
        <div className='flex flex-row text-center w-full p-2'>
          <img src={avatar} alt="avatar" className='img-avatar mr-5 w-12 h-12'/>
          <div className='text-left'>
            <h2 className='text-[#334144]'>{currentUser['displayName']}</h2>
            <p className='text-xs text-slate-500'>47 sightings</p>
          </div>
          <Button primary className="pt-2 pb-2 pl-7 pr-7 text-xs ml-auto hover:opacity-80">Report</Button>
        </div>
        <FlowerList></FlowerList>
      </div>
    )}
    </>
  )
}

export default ProfilePage