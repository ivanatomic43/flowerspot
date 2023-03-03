import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config';

import Modal from '../common/Modal'
import TextField from '../common/TextField';
import Button from '../common/Button';

import avatar from '../images/avatar.jpg'
import { useEffect } from 'react';

interface ProfileProps {
  onClose: () => void;
  currentUser: any;
}

function Profile({onClose, currentUser} : ProfileProps) : JSX.Element {

  const [userData, setUserData] = useState<DocumentData | undefined>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: ''
  })

  const auth = getAuth();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getDoc(doc(db, 'users', currentUser.uid));

      if (userData.exists()){
        setUserData(userData.data());
      } else {
        console.log("Error");
      }
    }

    getUserData();
  }, []);

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
        <div>
          <TextField labelName='First Name' fieldData={userData?.firstName}/>
        </div>
        <div>
          <TextField labelName='Last Name' fieldData={userData?.lastName}/>
        </div>
        <div>
          <TextField labelName='Date of Birth' fieldData={userData?.dateOfBirth} />
        </div>
        <div>
          <TextField labelName='E-mail address' fieldData={userData?.email}/>
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
