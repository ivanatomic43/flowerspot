import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Modal from '../common/Modal'
import TextField from '../common/TextField';
import Button from '../common/Button';

import avatar from '../images/avatar.jpg'

interface ProfileProps {
  onClose: () => void;
  currentUser: any;
}

function Profile({onClose, currentUser} : ProfileProps) : JSX.Element {

  const navigate = useNavigate();
  const auth = getAuth();

  console.log(currentUser);

  const onLogout = () => {
    auth.signOut();
    onClose();
  }

  const profileContent = (
    <div className="grid grid-flow-row m-auto p-5">
      <div className='flex flex-row justify-start text-center p-2 w-full'>
          <img src={avatar} alt="avatar" className='img-avatar mr-5 w-12 h-12'/>
          <div className='m-auto text-left'>
            <h2 className='text-[#334144]'>{currentUser.displayName}</h2>
            <p className='text-xs text-slate-500'>47 sightings</p>
          </div>
        </div>
        <div className=''>
          <TextField/>
        </div>
        <div>
          <TextField />
        </div>
        <div>
          <TextField />
        </div>
        <div>
          <TextField />
        </div>
        <div className="m-auto">
          <Button className="mt-3 pt-2 pl-5 pb-2 pr-5 text-xs" pink primary rounded onClick={onLogout}>Logout</Button>
        </div>
    </div>
  );

  return (
    <>
      <Modal onClose={onClose} hasForm={false} >
        {profileContent}
      </Modal>
    </>
  )
}

export default Profile
